import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useAuth } from "../features/auth/hooks/useAuth";

export default function LoginPage() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { login, isLoggingIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = Object.fromEntries(new FormData(formRef.current));
    try {
      await login(payload);
      navigate("/");
    } catch {
      // error toast already shown by the httpClient interceptor
    }
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl border border-border bg-surface p-8 shadow-sm">
        <img src="/assets/logo/logo.png" alt="Travel platform" className="mx-auto h-10 w-auto" />
        <h1 className="mt-6 text-center font-display text-2xl text-ink">Welcome back</h1>
        <p className="mt-1 text-center text-sm text-ink-soft">Log in to manage your bookings</p>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <Input
            label="Email"
            name="email"
            type="email"
            required
            autoFocus
            autoComplete="email"
            placeholder="you@example.com"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            required
            minLength={6}
            autoComplete="current-password"
            placeholder="Your password"
          />
          <Button type="submit" loading={isLoggingIn} disabled={isLoggingIn} className="mt-2 w-full">
            Log in
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-ink-soft">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="font-medium text-accent hover:text-accent-strong">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
