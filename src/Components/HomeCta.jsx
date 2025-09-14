import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
          alt="Kitchen Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Ready to Transform Your Kitchen?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white text-xl mb-10 max-w-2xl mx-auto"
        >
          Get in touch with our team today for a free consultation and quote
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-amber-600 font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
