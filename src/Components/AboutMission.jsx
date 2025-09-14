import { motion } from "framer-motion";

const MissionValuesSection = () => {
  const values = [
    { title: "Innovation", description: "We constantly explore new materials, technologies, and design approaches to create kitchens that are ahead of the curve.", icon: "💡" },
    { title: "Quality", description: "From the materials we select to the craftsmanship we deliver, quality is non-negotiable in every aspect of our work.", icon: "⭐" },
    { title: "Customer Focus", description: "We listen to our clients' needs and work collaboratively to ensure their vision becomes a reality.", icon: "👥" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Mission & Values
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValuesSection;
