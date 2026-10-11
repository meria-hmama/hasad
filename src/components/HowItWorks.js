const steps = [                                              //list of data, outside the component
  { title: "Register your batch", text: "A producer adds the product, the harvest date and a photo." },
  { title: "Share the story", text: "Hasad creates a batch page with its origin, so buyers can trust it." },
  { title: "Sell directly", text: "Buyers order straight from the producer and pay a fair price." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-green-900 py-16 text-white">      
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold md:text-4xl">How it works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (                           
            <div key={step.title}>                                
              <p className="text-5xl font-bold text-green-300">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-green-100">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}