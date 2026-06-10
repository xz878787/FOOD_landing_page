import { ArrowRight, BadgePercent } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../components/Container";
import { Reveal } from "../components/Motion";

export function PromoBanner() {
  return (
    <section className="bg-white pb-16 sm:pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-foodiez-orange p-8 text-white shadow-glow sm:p-10 lg:p-12">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-black">
                  <BadgePercent className="h-4 w-4" aria-hidden="true" />
                  New customer offer
                </div>
                <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
                  Free delivery on your first order
                </h2>
                <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-white/88">
                  Try Foodiez today and get your first meal delivered without the delivery fee.
                </p>
              </div>
              <motion.a
                href="#download"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-base font-black text-foodiez-orange shadow-soft outline-none transition hover:bg-orange-50 focus-visible:ring-4 focus-visible:ring-white/70"
              >
                Claim the offer
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </motion.a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
