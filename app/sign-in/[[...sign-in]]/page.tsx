"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-32 pb-24">
      <SignIn />
    </main>
  );
} 