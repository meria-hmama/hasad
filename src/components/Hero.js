export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">  {/* 1 column on phones, 2 from md */}
      <div>
        <p className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-800">
          Direct from women producers
        </p>
        <h1 className="text-4xl font-bold leading-tight text-stone-900 md:text-6xl">   {/* big title, bigger on md screens */}
          From her hands to your table.
        </h1>
        <p className="mt-6 text-lg text-stone-600">
          Hasad connects women-led producers of olive oil, essential oils and textiles
          with buyers, with no middlemen and a clear story behind every batch.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">                                    {/* two buttons, wrap on small screens */}
          <a href="#features" className="rounded-full bg-green-800 px-6 py-3 font-semibold text-white hover:bg-green-700">
            Explore features
          </a>
          <a href="#how" className="rounded-full border border-stone-300 px-6 py-3 font-semibold text-stone-700 hover:bg-stone-100">
            How it works
          </a>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-stone-200">      {/* the mock batch card */}
        <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">Batch #OL-2026-014</p>
        <h2 className="mt-2 text-2xl font-bold text-stone-900">Extra virgin olive oil</h2>
        <dl className="mt-6 space-y-4 text-sm">                                         {/* a list of label and value pairs */}
          <div className="flex justify-between border-b border-stone-100 pb-3">
            <dt className="text-stone-500">Producer</dt><dd className="font-semibold">Cooperative Amal, Sfax</dd>
          </div>
          <div className="flex justify-between border-b border-stone-100 pb-3">
            <dt className="text-stone-500">Harvest date</dt><dd className="font-semibold">12 Nov 2026</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-stone-500">Pressing</dt><dd className="font-semibold">Cold-pressed, 6 hours</dd>
          </div>
        </dl>
        <div className="mt-6 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
          Traceable from tree to bottle
        </div>
      </div>
    </section>
  );
}