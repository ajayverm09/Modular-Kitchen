import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg"
          alt="Modern Kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Transform Your Kitchen Into a Masterpiece
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
        >
          Modern designs, premium materials, and expert craftsmanship for the
          kitchen of your dreams
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            to="/contact"
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            Get a Free Consultation
          </Link>
          <Link
            to="/blogs"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            Explore Our Blog
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
