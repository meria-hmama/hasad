export default function Navbar() {                                   //our component(navbar)
  return (
    <header className="border-b border-stone-200 bg-white">          {/* white bar with a thin bottom line */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">  {/* centered row, space between items */}
        <a href="#" className="text-2xl font-bold text-green-800">Hasad</a>             {/* logo text */}
        <ul className="hidden gap-8 text-sm font-medium text-stone-600 md:flex">         {/* links: hidden on phones, row from medium screens */}
          <li><a href="#features">Features</a></li>
          <li><a href="#how">How it works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="rounded-full bg-green-800 px-5 py-2 text-sm font-semibold text-white hover:bg-green-700">  {/* round green button */}
          Join us
        </a>
      </nav>
    </header>
  );
}