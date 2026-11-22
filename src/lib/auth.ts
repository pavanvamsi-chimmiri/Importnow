import type { AuthSession, AuthUser } from "@/types";

const USERS_KEY = "lets-importnow-users";
const SESSION_KEY = "lets-importnow-session";

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

export function subscribeSession(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(`lets-importnow:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function getUsers(): AuthUser[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as AuthUser[]) : [];
  } catch {
    return [];
  }
}

function saveUsers(users: AuthUser[]) {
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

let cachedSessionRaw: string | null = null;
let cachedSession: AuthSession | null = null;

export function getSession(): AuthSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    if (raw === cachedSessionRaw) return cachedSession;
    cachedSessionRaw = raw;
    cachedSession = raw ? (JSON.parse(raw) as AuthSession) : null;
    return cachedSession;
  } catch {
    cachedSessionRaw = null;
    cachedSession = null;
    return null;
  }
}

export function getServerSession(): AuthSession | null {
  return null;
}

export function setSession(session: AuthSession | null) {
  if (typeof window === "undefined") return;
  if (session) {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } else {
    window.localStorage.removeItem(SESSION_KEY);
  }
  cachedSessionRaw = session ? JSON.stringify(session) : null;
  cachedSession = session;
  emit();
}

export async function signUpUser(input: {
  name: string;
  email: string;
  city: string;
  password: string;
}): Promise<{ ok: true; session: AuthSession } | { ok: false; error: string }> {
  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  const city = input.city.trim();
  const password = input.password;

  if (name.length < 2) return { ok: false, error: "Enter your full name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Enter a valid email address." };
  }
  if (password.length < 8) {
    return { ok: false, error: "Password must be at least 8 characters." };
  }

  const users = getUsers();
  if (users.some((user) => user.email === email)) {
    return { ok: false, error: "An account with this email already exists. Sign in instead." };
  }

  const user: AuthUser = {
    name,
    email,
    city,
    passwordHash: await hashPassword(password),
    createdAt: new Date().toISOString(),
  };
  saveUsers([...users, user]);
  const session = { name, email, city };
  setSession(session);
  return { ok: true, session };
}

export async function signInUser(input: {
  email: string;
  password: string;
}): Promise<{ ok: true; session: AuthSession } | { ok: false; error: string }> {
  const email = input.email.trim().toLowerCase();
  const users = getUsers();
  const user = users.find((item) => item.email === email);
  if (!user) {
    return { ok: false, error: "No account found for this email. Create one first." };
  }
  const passwordHash = await hashPassword(input.password);
  if (passwordHash !== user.passwordHash) {
    return { ok: false, error: "Incorrect password. Try again." };
  }
  const session = { name: user.name, email: user.email, city: user.city };
  setSession(session);
  return { ok: true, session };
}

export function signOutUser() {
  setSession(null);
}
