"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-forest-950/15 bg-brass-500 px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-[30px] text-forest-950">Greengrand</p>
            <p className="mt-3 max-w-xs text-[20px] leading-relaxed text-forest-950/80">
              A shirt manufacturing company in Bengaluru, crafting custom
              and wholesale shirts. Four releases a year, sixty pieces
              each, one palette throughout.
            </p>
          </div>

          <div>
            <p className="text-[17px] uppercase tracking-widest text-forest-950/70">Shop</p>
            <ul className="mt-4 space-y-2 text-[21px] text-forest-950">
              <li>
                <a href="#collection" className="hover:text-ivory">Collection</a>
              </li>
              <li>
                <a href="#fit" className="hover:text-ivory">Fit guide</a>
              </li>
              <li>
                <a href="#craft" className="hover:text-ivory">Materials</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[17px] uppercase tracking-widest text-forest-950/70">Contact</p>
            <ul className="mt-4 space-y-3 text-[21px] text-forest-950">
              <li>
                <a href="tel:+917090967411" className="flex items-center gap-2 hover:text-ivory">
                  <Phone className="h-5 w-5 shrink-0" />
                  +91 70909 67411
                </a>
              </li>
              <li>
                <a href="mailto:greengrandshirt@gmail.com" className="flex items-center gap-2 hover:text-ivory">
                  <Mail className="h-5 w-5 shrink-0" />
                  greengrandshirt@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/search?client=ms-android-motorola-rvo3&sca_esv=f77d92cfd20089c4&sxsrf=APpeQntsINAYs7sO4pdCQTsP2MWuomu6rQ:1784812622241&q=green+grand+shirts+bengaluru+address&ludocid=10931045372678644387&sa=X&ved=2ahUKEwjHgNuS8eiVAxUnbWwGHd5cB24Q6BN6BAgeEAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-ivory"
                >
                  <MapPin className="h-5 w-5 shrink-0 mt-1" />
                  <span>
                    110, 1st Main Road, 1st Cross, Vishwaneedom Post,
                    opp. Mohan Theatre, Hegganahalli Cross,
                    Lakshman Nagar, Bengaluru, Karnataka 560091
                  </span>
                </a>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-forest-950 hover:text-ivory">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.77 1.16A4.9 4.9 0 0 0 2.53 5.46c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.16 1.77.55.56 1.11.9 1.77 1.16.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47.66-.26 1.22-.6 1.77-1.16.56-.55.9-1.11 1.16-1.77.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.16-1.77 4.9 4.9 0 0 0-1.77-1.16c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.21 1.86.35.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.31.88.35 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.5-.35 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.31-1.86.35-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.21-1.86-.35a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.31-.88-.35-1.86-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.98.21-1.5.35-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.31 1.86-.35 1.05-.05 1.37-.06 4.04-.06z" />
                  <path d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM17.8 6.9a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-forest-950 hover:text-ivory">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-forest-950/15 pt-6 text-[18px] text-forest-950/80">
          <p>&copy; {new Date().getFullYear()} Greengrand Shirt Co. All rights reserved.</p>
          <p>Bengaluru, India</p>
        </div>

        <div className="mt-4 text-center text-[17px] text-forest-950/60">
          <p>Designed, Developed and Maintained by Sathya Enterprises</p>
        </div>
      </div>
    </footer>
  );
}