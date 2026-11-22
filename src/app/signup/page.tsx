"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthShowcase from "@/components/AuthShowcase";
import { signUpUser } from "@/lib/auth";
import { useAuth } from "@/components/AuthProvider";

export default function SignUpPage() {
  const router = useRouter();
  const { setUser, ready } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    event?.stopPropagation();
    if (!ready || submitting) return;
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setSubmitting(true);
    const result = await signUpUser({ name, email, city, password });
    setSubmitting(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setUser(result.session);
    router.push("/");
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-border text-white placeholder:text-foreground-secondary focus:outline-none focus:border-orange-primary transition-colors";

  return (
    <>
      <main className="relative min-h-screen pt-28 pb-16 md:pt-32">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 1200px 700px at 75% 45%, rgba(37, 72, 140, 0.28), transparent 60%),
              radial-gradient(ellipse 800px 500px at 10% 90%, rgba(239, 59, 45, 0.12), transparent 60%),
              #07131C
            `,
          }}
        />
        <div className="container relative z-10 grid items-start gap-8 lg:grid-cols-2">
          <div className="lg:hidden">
            <AuthShowcase compact />
          </div>
          <div className="hidden min-h-[620px] lg:block">
            <AuthShowcase />
          </div>
          <div className="flex items-center">
            <div className="w-full rounded-3xl border border-border bg-background-light/80 p-6 shadow-2xl backdrop-blur-md md:p-8">
              <p className="section-label mb-3">Create account</p>
              <h2 className="mb-2 text-3xl font-bold">Sign up to ImportNow</h2>
              <p className="mb-6 text-foreground-muted">
                Save sourcing quotes, track China-to-India shipments, and talk to
                the Shanghai team.
              </p>
              <form
                id="signup-form"
                data-auth-ready={ready ? "true" : "false"}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="signup-name" className="mb-2 block text-sm text-foreground-muted">
                    Full name
                  </label>
                  <input
                    id="signup-name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="signup-email" className="mb-2 block text-sm text-foreground-muted">
                    Email
                  </label>
                  <input
                    id="signup-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="signup-city" className="mb-2 block text-sm text-foreground-muted">
                    City in India
                  </label>
                  <input
                    id="signup-city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Hyderabad"
                    autoComplete="address-level2"
                    className={fieldClass}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="signup-password" className="mb-2 block text-sm text-foreground-muted">
                      Password
                    </label>
                    <input
                      id="signup-password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min. 8 characters"
                      autoComplete="new-password"
                      required
                      minLength={8}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="signup-confirm-password" className="mb-2 block text-sm text-foreground-muted">
                      Confirm password
                    </label>
                    <input
                      id="signup-confirm-password"
                      name="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      required
                      className={fieldClass}
                    />
                  </div>
                </div>
                {error ? (
                  <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                    {error}
                  </p>
                ) : null}
                <button
                  type="button"
                  disabled={submitting || !ready}
                  onClick={() => void handleSubmit()}
                  className="w-full rounded-full py-3.5 text-base font-medium text-white gradient-orange shadow-orange disabled:opacity-70"
                >
                  {submitting ? "Creating account..." : "Create ImportNow account"}
                </button>
              </form>
              <p className="mt-6 text-center text-sm text-foreground-muted">
                Already importing with us?{" "}
                <Link href="/signin" className="text-orange-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
