"use client";

export function Footer() {
  return (
    <footer className="border-t border-forest-950/15 bg-brass-500 px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-[30px] text-forest-950">Greengrand</p>
            <p className="mt-3 max-w-xs text-[20px] leading-relaxed text-forest-950/80">
              Small-run shirts cut in Bengaluru. Four releases a year,
              sixty pieces each, one palette throughout.
            </p>
          </div>

          <div>
            <p className="text-[17px] uppercase tracking-widest text-forest-950/70">Shop</p>
            <ul className="mt-4 space-y-2 text-[21px] text-forest-950">
              <li><a href="#collection" className="hover:text-ivory">Collection</a></li>
              <li><a href="#fit" className="hover:text-ivory">Fit guide</a></li>
              <li><a href="#craft" className="hover:text-ivory">Materials</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[17px] uppercase tracking-widest text-forest-950/70">Company</p>
            <ul className="mt-4 space-y-2 text-[21px] text-forest-950">
              <li><a href="#" className="hover:text-ivory">About</a></li>
              <li><a href="#" className="hover:text-ivory">Stockists</a></li>
              <li><a href="#" className="hover:text-ivory">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[17px] uppercase tracking-widest text-forest-950/70">Care</p>
            <ul className="mt-4 space-y-2 text-[21px] text-forest-950">
              <li><a href="#" className="hover:text-ivory">Shipping</a></li>
              <li><a href="#" className="hover:text-ivory">Returns</a></li>
              <li><a href="#" className="hover:text-ivory">Washing notes</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-forest-950/15 pt-6 text-[18px] text-forest-950/80">
          <p>© {new Date().getFullYear()} Greengrand Shirt Co. All rights reserved.</p>
          <p>Bengaluru, India</p>
        </div>

        <div className="mt-4 text-center text-[17px] text-forest-950/60">
          <p>Designed, Developed and Maintained by Sathya Enterprises</p>
        </div>
      </div>
    </footer>
  );
}