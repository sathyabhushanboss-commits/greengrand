"use client";

export function Footer() {
  return (
    <footer className="border-t border-brass-500/15 px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl text-ivory">Greengrand</p>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-sage">
              Small-run shirts cut in Bengaluru. Four releases a year,
              sixty pieces each, one palette throughout.
            </p>
            <form
              className="mt-6 flex max-w-xs gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-full border border-brass-500/30 bg-transparent px-4 py-2 text-sm text-ivory placeholder:text-sage/60 focus:border-brass-400"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brass-500 px-4 py-2 text-sm font-medium text-forest-950 transition hover:bg-brass-400"
              >
                Join
              </button>
            </form>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-widest text-sage">Shop</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory">
              <li><a href="#collection" className="hover:text-brass-400">Collection</a></li>
              <li><a href="#fit" className="hover:text-brass-400">Fit guide</a></li>
              <li><a href="#craft" className="hover:text-brass-400">Materials</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-widest text-sage">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory">
              <li><a href="#" className="hover:text-brass-400">About</a></li>
              <li><a href="#" className="hover:text-brass-400">Stockists</a></li>
              <li><a href="#" className="hover:text-brass-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-widest text-sage">Care</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory">
              <li><a href="#" className="hover:text-brass-400">Shipping</a></li>
              <li><a href="#" className="hover:text-brass-400">Returns</a></li>
              <li><a href="#" className="hover:text-brass-400">Washing notes</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-brass-500/15 pt-6 text-[12px] text-sage md:flex-row">
          <p>© {new Date().getFullYear()} Greengrand Shirt Co. All rights reserved.</p>
          <p>Bengaluru, India</p>
        </div>
      </div>
    </footer>
  );
}
