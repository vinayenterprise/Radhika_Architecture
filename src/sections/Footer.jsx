import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // alias to avoid confusion
import logo from "support.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10">
      {/* Contact Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 px-4 pb-12 max-w-screen-xl mx-auto">
        <div className="bg-gray-600 text-center px-6 py-6 rounded-md w-full max-w-md flex flex-col items-center">
          <FaPhoneAlt size={28} className="mb-3" />
          <a
            href="tel:+919250036565"
            className="text-sm font-medium break-words text-center sm:text-left max-w-full"
          >
            +91-9250036565
          </a>
          <p className="text-sm mt-1">Have a question? Call us now</p>
        </div>
        <div className="bg-gray-600 text-center px-6 py-6 rounded-md w-full max-w-md flex flex-col items-center">
          <FaEnvelope size={28} className="mb-3" />
          <a
            href="mailto:radhikaarchitecturalservices@gmail.com"
            className="text-sm font-medium break-words text-center sm:text-left max-w-full"
          >
            radhikaarchitecturalservices@gmail.com
          </a>
          <p className="text-sm mt-1">Need support? Drop us an email</p>
        </div>
      </div>

      {/* Footer Bottom Grid with thin dividers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 py-10 border-t border-gray-800 text-sm max-w-screen-xl mx-auto">
        {/* Column 1: Quick Links with react-scroll */}
        <div className="md:border-r border-gray-700 pr-0 md:pr-4">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {[
              { label: "Home", to: "hero" },
              { label: "About Us", to: "about" },
              { label: "Our Services", to: "services" },
              { label: "Projects", to: "projects" },
              { label: "Contact Us", to: "contact" },
            ].map(({ label, to }) => (
              <li key={label}>
                <ScrollLink
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="hover:text-yellow-500 transition duration-300 cursor-pointer"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Logo and Description */}
        <div className="text-center md:border-r border-gray-700 px-0 md:px-4">
          <img
            src={logo}
            alt="RADHIKA Logo"
            className="mx-auto mb-4 h-20 object-contain max-w-full"
          />
          <p className="text-sm text-gray-300 px-2 md:px-0">
            RADHIKA Architectural Services is a premier design consultancy
            specializing in crafting exceptional interiors for homes, offices,
            and hotels worldwide. We bring innovation, functionality, and style
            to every project.
          </p>
          {/* Read More is still a link to about section scroll */}
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="mt-3 text-sm font-semibold underline cursor-pointer hover:text-yellow-500 transition duration-300 inline-block"
          >
            READ MORE →
          </ScrollLink>
        </div>

        {/* Column 3: Map and Social Links */}
        <div className="pl-0 md:pl-4">
          <h2 className="text-xl font-bold mb-4">Our Location</h2>
          <div className="mb-4 w-full h-32 md:h-36 rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1055945242537!2d80.91324237449394!3d26.88605947665426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3b9373a7a17%3A0x53f6dcf5a6d41d72!2sKrishna%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1719823445678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <h2 className="text-lg font-semibold mb-2">Follow Us On</h2>
          <div className="flex gap-3 justify-center md:justify-start">
            {[
              {
                Icon: FaFacebookF,
                url: "https://www.facebook.com/RADHIKA.architectural",
                style: "text-blue-600 hover:text-blue-800 text-xl", // Custom style for Facebook
              },
              {
                Icon: FaYoutube,
                url: "https://www.youtube.com/@RadhikaArchitecturalServices",
                style: "text-red-600 hover:text-red-800 text-xl", // Custom style for YouTube
              },
              {
                Icon: FaInstagram,
                url: "https://www.instagram.com/RADHIKAarchitectural",
                style: "text-purple-600 hover:text-purple-800 text-xl", // Custom style for Instagram
              },
              {
                Icon: FaWhatsapp,
                url: "https://wa.me/919250036565",
                style: "text-green-500 hover:text-green-700 text-xl", // Custom style for WhatsApp
              },
            ].map(({ Icon, url, style }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:scale-110 transition-transform duration-300 ${style}`}
                aria-label="social media link"
              >
                <Icon className="p-2 rounded w-9 h-9 bg-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-800 max-w-screen-xl mx-auto px-4">
        © 2025 RADHIKA Architectural Services. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-yellow-500 p-3 rounded-full shadow-lg text-black text-xl hover:bg-yellow-400 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
