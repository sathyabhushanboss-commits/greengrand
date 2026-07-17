export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brass-500/15 bg-forest-900/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-16">
        <a href="#top" className="font-display text-xl tracking-wide text-ivory">
          Greengrand
        </a>
        <nav className="hidden gap-8 text-sm text-sage md:flex">
          <a href="#craft" className="transition hover:text-ivory">Craft</a>
          <a href="#collection" className="transition hover:text-ivory">Collection</a>
          <a href="#fit" className="transition hover:text-ivory">Fit Guide</a>
          <a href="#reviews" className="transition hover:text-ivory">Wearers</a>
        </nav>
        <a
          href="#collection"
          className="rounded-full border border-brass-500/60 px-5 py-2 text-sm text-brass-400 transition hover:border-brass-400 hover:text-ivory"
        >
          Shop the run
        </a>
      </div>
    </header>
  );
}
