import { Bike, MousePointerClick, Search } from "lucide-react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Motion";
import { SectionHeading } from "../components/SectionHeading";

const steps = [
  {
    icon: Search,
    title: "Browse restaurants",
    description: "Filter by cuisine, delivery time, rating, and offers to find the right meal fast.",
  },
  {
    icon: MousePointerClick,
    title: "Order in seconds",
    description: "Save favorites, repeat past orders, and check out with your preferred payment method.",
  },
  {
    icon: Bike,
    title: "Fast delivery",
    description: "Follow your courier from pickup to doorstep with live updates and clear ETAs.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Dinner plans, simplified"
            description="Foodiez keeps the whole journey clear, from the first craving to the moment your order arrives."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.1}>
                <article className="h-full rounded-2xl border border-orange-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-50 text-foodiez-orange">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-sm font-black text-foodiez-orange">Step {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-black text-gray-950">{step.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{step.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
