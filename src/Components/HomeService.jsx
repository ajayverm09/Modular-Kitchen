import React from "react";
import { motion } from "framer-motion";

const HomeService = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Comprehensive kitchen solutions from design to installation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kitchen Design",
                description:
                  "Custom kitchen designs tailored to your space and lifestyle",
                image:
                  "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
              },
              {
                title: "Renovation",
                description:
                  "Complete kitchen renovations with minimal disruption to your home",
                image:
                  "https://images.pexels.com/photos/14495889/pexels-photo-14495889.jpeg",
              },
              {
                title: "Custom Cabinetry",
                description:
                  "Handcrafted cabinets built to your exact specifications",
                image:
                  "https://images.pexels.com/photos/7061400/pexels-photo-7061400.jpeg",
              },
              {
                title: "Countertops",
                description:
                  "Premium granite, quartz, and marble countertops expertly installed",
                image:
                  "https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg",
              },
              {
                title: "Lighting Design",
                description:
                  "Elegant and functional lighting solutions to brighten your kitchen",
                image:
                  "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
              },
              {
                title: "Appliance Installation",
                description:
                  "Seamless integration of modern appliances into your kitchen",
                image:
                  "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-amber-600 font-medium hover:text-amber-700 transition duration-300">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeService;
