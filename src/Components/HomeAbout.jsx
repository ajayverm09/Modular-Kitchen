import { motion } from "framer-motion";

const zigzagData = [
  {
    title: "Our Philosophy",
    text: `At KitchenCraft, we believe a kitchen is more than just a functional space — it’s the heart of the home. Every project we take on is a blend of art and engineering, ensuring your kitchen is beautiful, practical, and uniquely yours. We focus on thoughtful layouts, premium materials, and craftsmanship that stands the test of time.`,
    img: "https://images.pexels.com/photos/33893215/pexels-photo-33893215.jpeg",
  },
  {
    title: "Our Commitment",
    text: `We are committed to quality, innovation, and customer satisfaction. Every kitchen we design and build reflects our dedication to excellence, combining style, functionality, and longevity in perfect harmony. From start to finish, your experience with us is seamless and enjoyable.`,
    img: "https://images.pexels.com/photos/7415115/pexels-photo-7415115.jpeg",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {zigzagData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-stretch mb-16 ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2 flex items-center"
              >
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl shadow-lg w-full h-[500px] object-cover"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
