import FeatureCard from "./FeatureCard";                          

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16">   {/* id lets the navbar link scroll here */}
      <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">Built for fair trade</h2>
      <p className="mt-3 max-w-2xl text-stone-600">
        Three simple tools that give women-led producers more control over what they sell.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">            {/* 1 column on phones, 3 from md */}
        <FeatureCard number="1" title="Direct sales" text="Buyers order straight from producers, so more of the price stays with the people who made the product." />
        <FeatureCard number="2" title="Batch traceability" text="Every batch has a page showing who made it, where, and when, so buyers know the story." />
        <FeatureCard number="3" title="Fair prices" text="Producers set and see their own prices, with no hidden margins from intermediaries." />
      </div>
    </section>
  );
}