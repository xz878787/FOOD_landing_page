import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./Container";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Restaurants", href: "#restaurants" },
  { label: "Reviews", href: "#reviews" },
  { label: "Download", href: "#download" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100/70 bg-white/90 backdrop-blur-xl">
      <Container>
        <nav className="flex min-h-20 items-center justify-between" aria-label="Main navigation">
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-xl outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
            aria-label="Foodiez home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-foodiez-orange text-lg font-black text-white shadow-glow">
              F
            </span>
            <span className="text-2xl font-black text-gray-950">Foodiez</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-gray-700 outline-none transition hover:text-foodiez-orange focus-visible:rounded-lg focus-visible:ring-4 focus-visible:ring-orange-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.a
            href="#download"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="hidden rounded-2xl bg-foodiez-orange px-5 py-3 text-sm font-extrabold text-white shadow-glow outline-none transition hover:bg-orange-600 focus-visible:ring-4 focus-visible:ring-orange-200 md:inline-flex"
          >
            Get the App
          </motion.a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-orange-100 bg-white text-gray-900 shadow-sm outline-none transition hover:bg-orange-50 focus-visible:ring-4 focus-visible:ring-orange-200 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>

        {open ? (
          <div id="mobile-menu" className="pb-5 md:hidden">
            <div className="rounded-2xl border border-orange-100 bg-white p-3 shadow-soft">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-bold text-gray-700 outline-none transition hover:bg-orange-50 hover:text-foodiez-orange focus-visible:ring-4 focus-visible:ring-orange-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-2xl bg-foodiez-orange px-4 py-3 text-center text-sm font-extrabold text-white shadow-glow outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
              >
                Get the App
              </a>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
