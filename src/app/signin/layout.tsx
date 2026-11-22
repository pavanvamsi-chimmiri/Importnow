import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in — Let's ImportNow",
  description:
    "Sign in to Let's ImportNow to continue sourcing, inspecting factories, and shipping from China to India.",
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
