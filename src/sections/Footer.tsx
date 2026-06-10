import { Facebook, Instagram, Twitter } from "lucide-react";
import { AppStoreButtons } from "../components/AppStoreButtons";
import { Container } from "../components/Container";

const navLinks = ["How it works", "Restaurants", "Reviews", "Download"];
const socials = [
  { label: "Instagram", icon: Instagram },
  { label: "Twitter", icon: Twitter },
  { label: "Facebook", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-xl outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
              aria-label="Foodiez home"
            >
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-foodiez-orange text-lg font-black text-white">
                F
              </span>
              <span className="text-2xl font-black text-gray-950">Foodiez</span>
            </a>
            <p className="mt-4 max-w-md leading-7 text-gray-600">
              Fast delivery from local restaurants, made simple for busy people with excellent taste.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#top"
                    className="grid h-11 w-11 place-items-center rounded-2xl border border-gray-100 text-gray-600 outline-none transition hover:border-orange-100 hover:bg-orange-50 hover:text-foodiez-orange focus-visible:ring-4 focus-visible:ring-orange-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[auto_auto]">
            <nav aria-label="Footer navigation">
              <h2 className="text-sm font-black uppercase tracking-[0.14em] text-gray-950">Explore</h2>
              <div className="mt-4 grid gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().split(" ").join("-")}`}
                    className="font-bold text-gray-600 outline-none transition hover:text-foodiez-orange focus-visible:rounded-lg focus-visible:ring-4 focus-visible:ring-orange-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </nav>
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.14em] text-gray-950">Get Foodiez</h2>
              <div className="mt-4">
                <AppStoreButtons />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-100 pt-6 text-sm font-semibold text-gray-500">
          Copyright 2026 Foodiez. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
