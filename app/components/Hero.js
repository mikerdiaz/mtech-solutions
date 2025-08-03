export default function Hero() {
  return (
    <section id="top" className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-24 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Reliable Network Solutions in BC
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Ethernet cabling, Wi‑Fi optimization, router & switch setup, and on‑site diagnostics — serving Surrey, Tri‑Cities and Burnaby.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#contact" className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">Request a Quote</a>
          <a href="#services" className="border border-white/20 px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition">See Services</a>
        </div>
      </div>
    </section>
  )
}
