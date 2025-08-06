'use client';
import { FaNetworkWired, FaWifi, FaServer, FaTools } from 'react-icons/fa';

const services = [
  {
    title: 'Ethernet Cabling (Cat5e/Cat6)',
    desc: 'Clean, professional runs for homes and small offices. Termination, labeling and testing included.',
    icon: <FaNetworkWired className="text-accent text-xl" />
  },
  {
    title: 'Wi‑Fi Optimization',
    desc: 'Coverage and speed improvements, mesh setup, channel planning and interference mitigation.',
    icon: <FaWifi className="text-accent text-xl" />
  },
  {
    title: 'Router & Switch Setup',
    desc: 'Secure configuration, VLANs (when needed), rack mounting and tidy cable management.',
    icon: <FaServer className="text-accent text-xl" />
  },
  {
    title: 'Diagnostics & Troubleshooting',
    desc: 'We identify bottlenecks, slow speeds, packet loss and solve connectivity issues.',
    icon: <FaTools className="text-accent text-xl" />
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          id="services-heading"
          className="text-3xl font-bold text-primary dark:text-white text-center md:text-left"
        >
          Services
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-center md:text-left mx-auto md:mx-0">
          Straightforward, transparent, and tailored to your needs.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300"
              role="listitem"
            >
              <div className="flex items-center gap-3">
                {s.icon}
                <h3 className="font-semibold text-lg text-primary dark:text-white group-hover:text-accent transition-colors duration-200">
                  {s.title}
                </h3>
              </div>
              <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}