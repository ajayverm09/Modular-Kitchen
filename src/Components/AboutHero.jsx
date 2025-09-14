import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative py-32 bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/about-hero/1920/600.jpg"
          alt="About KitchenCraft"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About KitchenCraft
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl max-w-3xl mx-auto"
        >
          Crafting exceptional kitchens with passion, innovation, and expertise since 2010
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
