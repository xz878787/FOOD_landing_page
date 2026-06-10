import { Apple, Play } from "lucide-react";
import { motion } from "framer-motion";

const stores = [
  { icon: Apple, eyebrow: "Download on the", label: "App Store" },
  { icon: Play, eyebrow: "Get it on", label: "Google Play" },
];

export function AppStoreButtons({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {stores.map((store) => {
        const Icon = store.icon;
        return (
          <motion.a
            key={store.label}
            href="#download"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl px-5 text-left shadow-soft outline-none transition focus-visible:ring-4 focus-visible:ring-orange-200 ${
              light
                ? "bg-white text-gray-950 hover:bg-orange-50"
                : "bg-gray-950 text-white hover:bg-gray-800"
            }`}
            aria-label={`${store.eyebrow} ${store.label}`}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
            <span>
              <span className="block text-[0.68rem] font-semibold leading-none opacity-80">
                {store.eyebrow}
              </span>
              <span className="block text-lg font-extrabold leading-tight">{store.label}</span>
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}
