import { CreditCard, MapPinned, Sparkles, Store } from "lucide-react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Motion";
import { SectionHeading } from "../components/SectionHeading";

const features = [
  {
    icon: MapPinned,
    title: "Real-time order tracking",
    description:
      "Know exactly when your restaurant starts cooking, when your courier picks up, and when to meet them at the door.",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Sparkles,
    title: "Personalized recommendations",
    description:
      "Foodiez learns your tastes, surfaces fresh local picks, and keeps favorite dishes one tap away.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: CreditCard,
    title: "Lightning-fast checkout",
    description:
      "Use saved addresses, smart reorder, and secure payments to go from craving to confirmed in seconds.",
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Store,
    title: "Exclusive local restaurants",
    description:
      "Order from independent kitchens and neighborhood gems you will not find on every delivery app.",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
  },
];

export function Features() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Features"
            title="Everything feels faster when the app thinks ahead"
            description="A polished ordering experience with the details that matter when you are hungry."
          />
        </Reveal>

        <div className="mt-14 space-y-14">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const reverse = index % 2 === 1;
            return (
              <Reveal key={feature.title}>
                <article
                  className={`grid items-center gap-8 lg:grid-cols-2 ${
                    reverse ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl shadow-soft">
                    <img
                      src={feature.image}
                      alt={`${feature.title} food delivery feature`}
                      className="h-72 w-full object-cover sm:h-96"
                    />
                  </div>
                  <div className="max-w-xl">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-foodiez-orange shadow-sm">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-3xl font-black leading-tight text-gray-950 sm:text-4xl">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-lg leading-8 text-gray-600">{feature.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
