import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-32 pb-24">
      <SignUp />
    </main>
  );
} 