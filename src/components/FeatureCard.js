export default function FeatureCard({ number, title, text }) {   //parameters arriving inside the curly braces
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-lg">  {/* lifts on hover */}
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
        {number}                                                  {/* curly braces insert a value */}
      </span>
      <h3 className="mt-5 text-xl font-bold text-stone-900">{title}</h3>
      <p className="mt-3 text-stone-600">{text}</p>
    </div>
  );
}