export default function Loading() {
  return (
    <div className="container flex min-h-screen items-center justify-center">
      <div className="glass-panel flex items-center gap-3 px-6 py-4">
        <span className="h-3 w-3 animate-pulse rounded-full bg-[var(--color-primary)]" />
        <span className="text-sm font-medium text-[var(--muted-foreground)]">
          Loading premium experience...
        </span>
      </div>
    </div>
  );
}
