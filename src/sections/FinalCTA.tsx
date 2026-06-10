import { AppStoreButtons } from "../components/AppStoreButtons";
import { Container } from "../components/Container";
import { Reveal } from "../components/Motion";

export function FinalCTA() {
  return (
    <section id="download" className="bg-gray-950 py-16 text-white sm:py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-foodiez-coral">
              Ready when you are
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Download Foodiez and get your food faster than ever
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/72">
              Install the app, unlock local favorites, and bring dinner home with live tracking
              from the first tap.
            </p>
            <div className="mt-9 flex justify-center">
              <AppStoreButtons light />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
