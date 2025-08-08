
'use client';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center md:text-left grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-2">IPnityAI</h3>
          <p>Smart network & security camera solutions across Surrey, Tri-Cities & Burnaby.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>📞 (672) 962-5220</p>
          <p>✉️ mike@ipnityai.com</p>
          <p>📍 Coquitlam, BC</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-slate-300">
        &copy; {new Date().getFullYear()} IPnityAI. All rights reserved.
      </div>
    </footer>
  );
}
