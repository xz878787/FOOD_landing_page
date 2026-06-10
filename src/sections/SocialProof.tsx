import { Star } from "lucide-react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Motion";
import { SectionHeading } from "../components/SectionHeading";

const restaurants = ["Basil & Bun", "Urban Taco", "Nori House", "Green Spoon", "Pasta Mio"];

const reviews = [
  {
    name: "Maya Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
    quote: "Foodiez is my weeknight shortcut. The tracking is accurate and my regular spots are all here.",
  },
  {
    name: "Jordan Ellis",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
    quote: "Checkout is fast, recommendations are useful, and the first-order delivery offer sealed it.",
  },
  {
    name: "Priya Raman",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80",
    quote: "I found local restaurants I had never noticed before. It feels premium without being fussy.",
  },
];

export function SocialProof() {
  return (
    <section id="restaurants" className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Trusted locally"
            title="The restaurants people already love, ready in one app"
            description="Discover neighborhood favorites, chef-led independents, and dependable classics with transparent ratings and delivery times."
          />
        </Reveal>

        <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" delay={0.08}>
          {restaurants.map((restaurant) => (
            <div
              key={restaurant}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center text-sm font-black text-gray-800 shadow-sm"
            >
              {restaurant}
            </div>
          ))}
        </Reveal>

        <div id="reviews" className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex text-foodiez-orange" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-5 leading-7 text-gray-600">"{review.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={review.avatar} alt={`${review.name} avatar`} className="h-12 w-12 rounded-full object-cover" />
                  <p className="font-black text-gray-950">{review.name}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
