import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    title: "Luxury Marble Kitchen",
    desc: "Elegant design with marble countertops",
    img: "https://images.pexels.com/photos/6587896/pexels-photo-6587896.jpeg",
  },
  {
    id: 2,
    title: "Modern Minimalist Kitchen",
    desc: "Sleek cabinetry and open layout",
    img: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg",
  },
  {
    id: 3,
    title: "Rustic Wooden Kitchen",
    desc: "Warm tones with natural wood elements",
    img: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
  },
  {
    id: 4,
    title: "Contemporary Kitchen",
    desc: "Premium finishes with modern lighting",
    img: "https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg",
  },
  {
    id: 5,
    title: "Open Concept Kitchen",
    desc: "Spacious layout with seamless flow",
    img: "https://images.pexels.com/photos/4044801/pexels-photo-4044801.jpeg",
  },
  {
    id: 6,
    title: "Scandinavian Kitchen",
    desc: "Bright and airy with Nordic aesthetics",
    img: "https://images.pexels.com/photos/5825699/pexels-photo-5825699.jpeg",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore our latest kitchen transformations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition duration-300">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blogs"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
