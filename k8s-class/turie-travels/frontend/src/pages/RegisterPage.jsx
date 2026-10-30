import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useAuth } from "../features/auth/hooks/useAuth";

export default function RegisterPage() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { signup, isSigningUp } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(formRef.current));
    try {
      await signup(payload);
      navigate("/");
    } catch {
      // error toast already shown by the httpClient interceptor
    }
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-surface p-8 shadow-sm">
        <img src="/assets/logo/logo.png" alt="Travel platform" className="mx-auto h-10 w-auto" />
        <h1 className="mt-6 text-center font-display text-2xl text-ink">Create your account</h1>
        <p className="mt-1 text-center text-sm text-ink-soft">Book flights, trains and buses in one place</p>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <Input label="Full name" name="name" type="text" required autoFocus autoComplete="name" placeholder="Jane Doe" />
          <Input label="Email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
          <Input label="Phone" name="phone" type="tel" required minLength={10} autoComplete="tel" placeholder="9876543210" />
          <Input
            label="Password"
            name="password"
            type="password"
            required
            minLength={6}
            autoComplete="new-password"
            placeholder="At least 6 characters"
          />
          <Button type="submit" loading={isSigningUp} disabled={isSigningUp} className="mt-2 w-full">
            Create account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-ink-soft">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-accent hover:text-accent-strong">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
