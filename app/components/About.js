'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
          About EvoNet IP
        </h2>
        <p
          className="prose prose-lg text-slate-600 dark:text-slate-300 mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At <strong>EvoNet IP</strong>, we believe that fast, secure, and affordable network installations should be easy and accessible.
          Founded by Mike Diaz, we specialize in clean and professional setups for home and small business networks, including wired and wireless systems,
          smart home integrations, and IP security camera installations.
        </p>

        {/* Why Choose Us Section */}
        <div
          className="mt-16 max-w-3xl mx-auto text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-8">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                icon: '🏠',
                title: 'Locally Owned & Operated',
                desc: 'No outsourcing or call centers — just real local service.',
              },
              {
                icon: '🧹',
                title: 'Clean, Professional Installations',
                desc: 'We ensure all cables and equipment are tidy and well-placed.',
              },
              {
                icon: '💰',
                title: 'Affordable & Transparent Pricing',
                desc: 'Clear estimates and honest rates.',
              },
              {
                icon: '🛠️',
                title: 'Tailored Solutions',
                desc: 'We build your system based on what you actually need.',
              },
              {
                icon: '⏱️',
                title: 'Fast Response, Flexible Scheduling',
                desc: 'We value your time and show up on time.',
              },
              {
                icon: '🔒',
                title: 'Expertise You Can Trust',
                desc: 'Experience in networks, IP cameras, and smart systems — done right the first time.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <strong className="block text-blue-800 dark:text-blue-300">
                    {item.title}
                  </strong>
                  <p className="text-slate-700 dark:text-slate-200">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}