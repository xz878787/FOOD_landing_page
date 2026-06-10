import { Heart, LocateFixed, ReceiptText, Utensils } from "lucide-react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Motion";
import { SectionHeading } from "../components/SectionHeading";

const screens = [
  {
    icon: Utensils,
    title: "Curated cuisine feeds",
    caption: "Fresh picks by mood, diet, distance, and speed.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=720&q=80",
  },
  {
    icon: LocateFixed,
    title: "Live courier map",
    caption: "Accurate ETAs from kitchen pickup to your door.",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=720&q=80",
  },
  {
    icon: ReceiptText,
    title: "Smart order history",
    caption: "Repeat favorites or rebuild past orders quickly.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=720&q=80",
  },
  {
    icon: Heart,
    title: "Favorites that travel",
    caption: "Save dishes, restaurants, addresses, and payment.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=720&q=80",
  },
];

export function AppPreview() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="App preview"
            title="A smoother way to order on every screen"
            description="Swipe through the moments that make Foodiez feel quick, confident, and personal."
          />
        </Reveal>

        <div className="hide-scrollbar mt-12 flex snap-x gap-6 overflow-x-auto pb-6">
          {screens.map((screen, index) => {
            const Icon = screen.icon;
            return (
              <Reveal key={screen.title} delay={index * 0.08} className="min-w-[17rem] snap-center sm:min-w-[20rem]">
                <article className="rounded-[2rem] bg-gray-950 p-3 shadow-soft">
                  <div className="phone-shine min-h-[34rem] overflow-hidden rounded-[1.5rem] p-4">
                    <div className="mx-auto h-5 w-20 rounded-full bg-gray-950" />
                    <img
                      src={screen.image}
                      alt={`${screen.title} screen preview`}
                      className="mt-5 h-56 w-full rounded-2xl object-cover shadow-sm"
                    />
                    <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-foodiez-orange">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 text-2xl font-black text-gray-950">{screen.title}</h3>
                      <p className="mt-3 leading-7 text-gray-600">{screen.caption}</p>
                    </div>
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
