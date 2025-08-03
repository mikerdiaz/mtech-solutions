export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-bold text-4xl text-primary">
          EvoNet <span className="text-accent">IP</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-accent">Services</a>
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#coverage" className="hover:text-accent">Coverage</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
        <a href="#contact" className="md:inline-block hidden bg-accent text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition">Get a Quote</a>
      </div>
    </header>
  )
}
