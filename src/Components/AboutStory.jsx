import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StorySection = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              KitchenCraft was born from a simple observation: the kitchen is the heart of every home...
            </p>
            <p className="text-gray-600 mb-4">
              What began in a small workshop in 2010 has grown into a premier kitchen design and renovation company...
            </p>
            <p className="text-gray-600 mb-6">
              Today, our team of talented designers and craftsmen continue to push the boundaries of kitchen design...
            </p>

            {/* Stats Section */}
            <div ref={statsRef} className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">
                  {statsInView && <CountUp start={0} end={500} duration={2} separator="," />}+
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">
                  {statsInView && <CountUp start={0} end={15} duration={2} />}+
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">
                  {statsInView && <CountUp start={0} end={98} duration={2} />}%
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <img
              src="https://picsum.photos/seed/about-story/800/600.jpg"
              alt="KitchenCraft Workshop"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
