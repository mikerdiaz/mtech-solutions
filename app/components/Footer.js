// Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-blue-900 dark:bg-slate-900 text-white dark:text-slate-200 py-10 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            (672) 962-5220
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            admin@ipnityai.com
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Coquitlam, BC
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Networks & Web</h2>
          <p className="mb-2">
            <FontAwesomeIcon icon={faGlobe} className="mr-2" />
            <a
              href="https://www.ipnityai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-accent"
            >
              www.ipnityai.com
            </a>
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
            <a
              href="https://www.instagram.com/ipnityai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-accent"
            >
              @ipnityai
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-slate-400">
        &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> IpniTyAI. All rights reserved.
      </div>
    </footer>
  );
}