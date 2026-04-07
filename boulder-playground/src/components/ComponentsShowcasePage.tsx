import { BoulderExperienceCard } from "./BoulderExperienceCard";

type ComponentsShowcasePageProps = {
  onBackHome: () => void;
};

export function ComponentsShowcasePage({}: ComponentsShowcasePageProps) {
  return (
    <main className="components-page">
      <section className="components-page__hero">
        <div className="components-page__hero-copy">
          <p className="eyebrow">Components</p>
        </div>
      </section>

      <section className="components-page__content">
        <BoulderExperienceCard />
      </section>
    </main>
  );
}
