import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/about" },
      { name: "Careers", path: "/about" },
      { name: "Testimonials", path: "/about" },
    ],
    services: [
      { name: "Kitchen Design", path: "/about" },
      { name: "Renovation", path: "/about" },
      { name: "Custom Cabinetry", path: "/about" },
      { name: "Consultation", path: "/contact" },
    ],
    resources: [
      { name: "Blog", path: "/blogs" },
      { name: "Design Inspiration", path: "/blogs" },
      { name: "FAQ", path: "/contact" },
      { name: "Warranty", path: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/home" },
      { name: "Terms of Service", path: "/home" },
      { name: "Accessibility", path: "/home" },
      { name: "Sitemap", path: "/home" },
    ],
  };

  // ✅ React Icons instead of emojis
  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, url: "https://facebook.com/kitchencraft" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com/kitchencraft" },
    { name: "Pinterest", icon: <FaPinterestP />, url: "https://pinterest.com/kitchencraft" },
    { name: "YouTube", icon: <FaYoutube />, url: "https://youtube.com/kitchencraft" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold">KitchenCraft</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming houses into homes with exceptional kitchen designs since 2010. We combine innovative
              design with expert craftsmanship to create spaces that inspire.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition duration-300"
                  whileHover={{ y: -5 }}
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-amber-500 transition duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-amber-500 transition duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-amber-500 transition duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800 rounded-xl p-8 mb-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Get the latest kitchen design trends, tips, and exclusive offers delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="flex items-start">
            <div className="text-amber-500 text-xl mr-4">📍</div>
            <div>
              <h4 className="font-semibold mb-2">Visit Our Showroom</h4>
              <p className="text-gray-400">123 Kitchen Street, Design District</p>
              <p className="text-gray-400">New York, NY 10001</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-amber-500 text-xl mr-4">📞</div>
            <div>
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-gray-400">(555) 123-4567</p>
              <p className="text-gray-400">Mon-Fri: 9am-6pm, Sat: 10am-4pm</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-amber-500 text-xl mr-4">✉️</div>
            <div>
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-gray-400">info@kitchencraft.com</p>
              <p className="text-gray-400">support@kitchencraft.com</p>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© {currentYear} KitchenCraft. All rights reserved.</p>
          <div className="flex space-x-6">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-gray-500 text-sm hover:text-amber-500 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
