import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up — Let's ImportNow",
  description:
    "Create a Let's ImportNow account to save sourcing quotes and track China-to-India shipments.",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
