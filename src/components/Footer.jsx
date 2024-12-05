import React from "react";
import ThreeBackground from "./ThreeBackground";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative w-full">
      {/* Full-Screen Three.js Starry Background */}
      <ThreeBackground className="absolute inset-0 z-0" />

      {/* Footer Content */}
      <footer className="relative z-10 text-white py-12 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-300">
              We are a passionate team committed to innovation, creativity, and impact. Join us in building the future together.
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="text-gray-300 space-y-2">
              <li>
                <a href="/team" className="hover:text-blue-400 transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-blue-400 transition-colors">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-blue-400 transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2024 Catalysts. All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️ by the <span className="text-blue-400">Catalysts Team</span>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
