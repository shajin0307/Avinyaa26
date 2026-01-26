import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import "@fontsource/inter";
import "@fontsource/poppins";

/**
 * Footer Component
 *
 * Site-wide footer with links, social icons, and copyright.
 *
 * @component
 * @example
 * <Footer />
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50 bg-gradient-to-br from-black via-red-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-20 gap-y-12 items-start">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-bold font-inter bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">
                AVINYAA
              </span>
            </Link>
            <p className="mt-4 text-l text-gray-400 max-m-md">
              R.M.D Engineering College,
              R.S.M Nagar,
              Kavaraipettai,
              Tamil Nadu,
              Pin code: 601 206.
            </p>
          </div>

          {/* Coordinators */}
          <div className="md:col-span-2 font-inter">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-4 font-poppins">
              Co-ordinators
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-23 gap-y-6">

              {/* Faculty */}
              <div>
                <h4 className="text-s font-semibold text-gray-300 uppercase tracking-wide mb-3 font-poppins">
                  Faculty
                </h4>
                <ul className="space-y-4 text-sm text-gray-400 leading-relaxed">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/remya-rose-s-0603401b3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base block font-medium hover:text-red-700 transition-colors font-poppins"
                    >
                      Mrs. Remya Rose S
                    </a>
                    <span className="text-gray-300 text-l">Assistant Professor</span>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/sathish-kumar-14650544/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base font-medium hover:text-red-700 font-poppins transition-colors"
                    >
                      Mr. N Sathish Kumar
                    </a>
                    <span className="text-gray-300 text-l">Assistant Professor</span>
                  </li>
                </ul>
              </div>

              {/* Student */}
              <div>
                <h4 className="text-base font-semibold text-gray-300 uppercase tracking-wide mb-3 font-poppins">
                  Student
                </h4>
                <ul className="space-y-4 text-sm text-gray-400 leading-relaxed">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/kumari-selvi-2314032b8/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base font-medium font-poppins hover:text-red-700 transition-colors"
                    >
                      Kumari Selvi C
                    </a>
                    <span className="text-gray-300 text-l">President</span>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/shajinaiml/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base font-poppins font-medium hover:text-red-700 transition-colors"
                    >
                      Shajin S P
                    </a>
                    <span className="text-gray-300 text-l">Vice-President</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Explore */}
          <div className="md:pl-3 font-inter">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-l text-gray-400 hover:text-red-700 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-l text-gray-400 hover:text-red-700 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-l hover:text-red-700 text-gray-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-red-700 text-gray-400 transition-colors whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:pl-3">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-4 ">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {/* WhatsApp */}
              <li>
                <a
                  href="https://chat.whatsapp.com/LqXgngbOwS7JyNqn5Bqvsq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-green-400 tracking-wide leading-relaxed transition-colors"
                >
                  <FaWhatsapp className="text-lg shrink-0" />
                  WhatsApp
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/avinyaa26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 tracking-wide leading-relaxed hover:text-[#DB2777] hover:hover:bg-gradient-to-r
  hover:from-[#f58529]
  hover:via-[#dd2a7b]
  hover:to-[#8134af]
  hover:bg-clip-text
  hover:text-[#DD2A7B] transition-colors"
                >
                  <FaInstagram className="text-lg shrink-0" />
                  Instagram
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Avinya.
          </p>

          <p className="text-sm font-inter text-gray-50 flex items-center gap-1">
            Made with
            <FaHeart className="text-red-900 hover:scale-110 animate-pulse transition-transform" />
            <a
              href="https://buildyourgenie.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins text-red-700 hover:text-red-300 cursor-pointer">
              B.U.G FREELANCERS
            </a>

          </p>
        </div>

      </div>
    </footer >
  );
};

export default Footer;
