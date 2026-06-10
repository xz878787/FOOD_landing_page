import { Clock, MapPin, Star, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { AppStoreButtons } from "../components/AppStoreButtons";
import { Container } from "../components/Container";

const stats = [
  { icon: Star, value: "4.9/5", label: "App rating" },
  { icon: Clock, value: "18 min", label: "Avg delivery" },
  { icon: Truck, value: "12k+", label: "Restaurants" },
];

const foodCards = [
  {
    title: "Truffle smash burger",
    tag: "Arrives in 12 min",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=520&q=80",
  },
  {
    title: "Fresh sushi set",
    tag: "Top rated",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=520&q=80",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative bg-white pb-16 pt-10 sm:pb-24 lg:pt-16">
      <div
        className="absolute inset-x-0 top-0 -z-0 h-[38rem] bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-[0.08]"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-extrabold text-foodiez-orange">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Now serving 120+ neighborhoods
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] text-gray-950 sm:text-6xl lg:text-7xl">
            Your favorite food, delivered fast
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            Foodiez connects you with the best local restaurants, real-time order tracking,
            personalized picks, and checkout that takes seconds.
          </p>
          <div className="mt-8">
            <AppStoreButtons />
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-orange-100 bg-white/85 p-4 shadow-sm backdrop-blur"
                >
                  <Icon className="h-5 w-5 text-foodiez-orange" aria-hidden="true" />
                  <p className="mt-3 text-2xl font-black text-gray-950">{stat.value}</p>
                  <p className="text-sm font-semibold text-gray-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[31rem]">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto w-[18.5rem] rounded-[2.25rem] border-[10px] border-gray-950 bg-gray-950 p-2 shadow-soft sm:w-[21rem]"
            aria-label="Foodiez app preview"
          >
            <div className="phone-shine min-h-[38rem] overflow-hidden rounded-[1.75rem] p-4">
              <div className="mx-auto mb-4 h-6 w-24 rounded-full bg-gray-950" />
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-sm font-bold text-gray-500">Good evening</p>
                <h2 className="mt-1 text-2xl font-black text-gray-950">What are you craving?</h2>
                <div className="mt-4 rounded-2xl bg-orange-50 px-4 py-3 text-sm font-bold text-gray-500">
                  Search dishes, restaurants
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {["Pizza", "Sushi", "Salad"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white py-3 text-center text-sm font-extrabold shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl bg-white shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=620&q=80"
                  alt="Cheesy pizza from a local restaurant"
                  className="h-36 w-full object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-gray-950">Mozza Napoli</h3>
                    <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-black text-green-700">
                      4.9
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-gray-500">Wood-fired pizza and pasta</p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl bg-gray-950 p-4 text-white shadow-soft">
                <div className="flex items-center justify-between">
                  <p className="font-black">Your courier is nearby</p>
                  <Truck className="h-5 w-5 text-foodiez-orange" aria-hidden="true" />
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-3/4 rounded-full bg-foodiez-orange" />
                </div>
                <p className="mt-3 text-sm font-semibold text-white/75">8 minutes remaining</p>
              </div>
            </div>
          </motion.div>

          {foodCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + index * 0.15, duration: 0.65 }}
              className={`absolute hidden w-56 items-center gap-3 rounded-2xl bg-white p-3 shadow-soft lg:flex ${
                index === 0 ? "-left-12 top-24" : "-right-10 bottom-24"
              }`}
            >
              <img src={card.image} alt="" className="h-14 w-14 rounded-2xl object-cover" />
              <div>
                <p className="text-sm font-black text-gray-950">{card.title}</p>
                <p className="text-xs font-bold text-foodiez-orange">{card.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
