// Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-blue-900 dark:bg-slate-900 text-slate-100 dark:text-slate-300 py-10 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-lg font-semibold mb-4 text-slate-200">
            Contact
          </h2>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-slate-400" />
              <span>(672) 962-5220</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-slate-400" />
              <span>admin@ipnityai.com</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-slate-400" />
              <span>Coquitlam, BC</span>
            </li>
          </ul>
        </section>

        {/* Networks & Web */}
        <section aria-labelledby="networks-heading">
          <h2 id="networks-heading" className="text-lg font-semibold mb-4 text-slate-200">
            Networks & Web
          </h2>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faGlobe} className="mr-2 text-slate-400" />
              <a
                href="https://www.ipnityai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-accent"
              >
                www.ipnityai.com
              </a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faInstagram} className="mr-2 text-slate-400" />
              <a
                href="https://www.instagram.com/ipnityai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-accent"
              >
                @ipnityai
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-slate-400">
        &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span>{' '}
        IpniTyAI. All rights reserved.
      </div>
    </footer>
  );
}