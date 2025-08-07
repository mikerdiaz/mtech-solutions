export default function About() {
  return (
    <section
      id="about"
      className="py-20 transition-colors duration-300"
    >
      {/* About Us Section */}
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-primary dark:text-accent mb-6">
          About Us
        </h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-4xl mx-auto md:mx-0">
          At <strong>EvoNet IP</strong>, we believe that fast, reliable, and secure network installations shouldn’t be complicated or expensive.
          Founded by Mike Diaz, we specialize in clean and professional setups for home and small business networks, including wired and wireless systems, smart home integrations, and IP security camera installations.
          📍 Proudly serving Surrey, Tri-Cities, Burnaby, and surrounding areas — we focus on personalized service, high-quality materials, and future-ready installations that just work.
          Whether you’re upgrading your home Wi-Fi, building a smarter workspace, or improving your network security, EvoNet IP is your trusted local partner.
        </p>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left mt-16">
        <h2 className="text-3xl font-bold text-primary dark:text-accent mb-6">
          Why Choose EvoNet IP?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-600 dark:text-slate-300 max-w-4xl mx-auto md:mx-0 list-none">
          <li className="flex items-start gap-2">
            <span className="text-green-500 text-xl">✅</span>
            <span>
              <strong>Locally Owned & Operated.</strong> We’re based in your community — no call centers, no outsourcing. Just real, local service from people who care.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 text-xl">✅</span>
            <span>
              <strong>Clean, Professional Installations.</strong> We take pride in neat wiring, smart placement, and attention to detail.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 text-xl">✅</span>
            <span>
              <strong>Affordable & Transparent Pricing.</strong> No hidden fees. No surprises. We provide clear estimates and fair rates.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 text-xl">✅</span>
            <span>
              <strong>Tailored Solutions.</strong> Every home and business is unique. We design your system around your actual needs — not upsells.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 text-xl">✅</span>
            <span>
              <strong>Fast Response, Flexible Scheduling.</strong> We work around your schedule and show up when we say we will.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 text-xl">✅</span>
            <span>
              <strong>Expertise You Can Trust.</strong> With hands-on experience in IP networks, smart devices, and surveillance systems, we get it done right — the first time.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}