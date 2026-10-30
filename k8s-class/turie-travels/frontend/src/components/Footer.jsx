export function Footer() {
  return (
    <footer className="bg-ink-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row">
        <img src="/assets/logo/logo-white.png" alt="Travel platform" className="h-7 w-auto" />
        <p className="text-sm text-ink-300">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
