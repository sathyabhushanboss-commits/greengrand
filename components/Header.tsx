"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "917090967411"; // country code + number, no spaces or symbols

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const text = `Hello, my name is ${name}.%0A%0A${encodeURIComponent(
      message
    )}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsOpen(false);
    setName("");
    setMessage("");
  }

  return (
    <>
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
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="rounded-full border border-brass-500/60 px-5 py-2 text-sm text-brass-400 transition hover:border-brass-400 hover:text-ivory"
          >
            Contact Us
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-brass-500/20 bg-forest-900 p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-lg text-ivory">Contact Us</h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-sage transition hover:text-ivory"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-sage">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-brass-500/30 bg-forest-900 px-3 py-2 text-sm text-ivory outline-none transition focus:border-brass-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-sage">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-lg border border-brass-500/30 bg-forest-900 px-3 py-2 text-sm text-ivory outline-none transition focus:border-brass-400"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full border border-brass-500/60 px-5 py-2 text-sm text-brass-400 transition hover:border-brass-400 hover:text-ivory"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}