
'use client';

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Home Network Setup</h3>
            <p>Custom Wi-Fi and wired solutions to keep your home connected securely and reliably.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Small Business Networking</h3>
            <p>Structured cabling, switches, and network devices configured for your specific needs.</p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">IP Camera Installation</h3>
            <p>Monitor your property with smart surveillance systems installed and configured by pros.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
