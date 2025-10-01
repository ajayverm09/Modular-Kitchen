import { motion } from "framer-motion";

const milestones = [
  { year: "2010", title: "KitchenCraft Founded", description: "Started as a small workshop with a big vision for transforming kitchens." },
  { year: "2013", title: "First Showroom Opened", description: "Expanded our presence with a dedicated showroom to display our designs." },
  { year: "2016", title: "Regional Expansion", description: "Grew our service area to cover the entire region with multiple teams." },
  { year: "2019", title: "Design Innovation Award", description: "Recognized for our innovative approach to sustainable kitchen design." },
  { year: "2022", title: "500+ Projects Completed", description: "Celebrated the milestone of completing over 500 kitchen transformations." },
];

const TimelineSection = () => (
  <section className="py-12 md:py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }} 
          className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4"
        >
          Our Journey
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.1 }} 
          className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
        >
          Key milestones in our history
        </motion.p>
      </div>

      <div className="relative">
        {/* Timeline line - hidden on small screens */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
        
        <div className="space-y-8 md:space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              className={`flex ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} items-start`}
            >
              {/* Milestone card */}
              <div className="w-full md:w-5/12 mb-4 md:mb-0 md:px-6">
                <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
                  <div className="text-amber-600 font-bold text-base md:text-lg mb-2">{milestone.year}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{milestone.description}</p>
                </div>
              </div>
              
              {/* Timeline circle */}
              <div className="flex justify-center md:w-2/12 relative">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold z-10 text-sm md:text-base">
                  {index + 1}
                </div>
              </div>
              
              {/* Spacer for desktop layout */}
              <div className="hidden md:block md:w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;