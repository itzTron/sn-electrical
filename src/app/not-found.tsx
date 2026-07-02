import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <div className="glass-panel max-w-xl px-8 py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
          Page not found
        </h1>
        <p className="mt-4 text-[var(--muted-foreground)]">
          The page you requested does not exist or has moved.
        </p>
        <Link href="/en" className="button-primary mt-8">
          Return home
        </Link>
      </div>
    </main>
  );
}

