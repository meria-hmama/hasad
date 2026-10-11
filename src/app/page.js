import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}