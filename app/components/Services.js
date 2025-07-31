const services = [
  {
    title: "Ethernet Cabling (Cat5e/Cat6)",
    desc: "Clean, professional runs for homes and small offices. Termination, labeling and testing included."
  },
  {
    title: "Wi‑Fi Optimization",
    desc: "Coverage and speed improvements, mesh setup, channel planning and interference mitigation."
  },
  {
    title: "Router & Switch Setup",
    desc: "Secure configuration, VLANs (when needed), rack mounting and tidy cable management."
  },
  {
    title: "Diagnostics & Troubleshooting",
    desc: "We identify bottlenecks, slow speeds, packet loss and solve connectivity issues."
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center md:text-left">Services</h2>
        <p className="mt-3 text-slate-600 max-w-2xl text-center md:text-left mx-auto md:mx-0">
          Straightforward, transparent, and tailored to your needs.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-semibold text-lg text-primary">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
