import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  { name: "Alex Morgan", role: "Founder & CEO", bio: "With over 15 years in the kitchen design industry, Alex leads our team with passion and vision.", image: "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg" },
  { name: "Jamie Chen", role: "Head Designer", bio: "Jamie brings innovative design concepts to life with a keen eye for detail and functionality.", image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg" },
  { name: "Taylor Williams", role: "Master Craftsman", bio: "Taylor's expertise in cabinetry and woodworking ensures exceptional quality in every project.", image: "https://images.pexels.com/photos/4114635/pexels-photo-4114635.jpeg" },
  { name: "Jenny Smith", role: "Project Manager", bio: "Jordan coordinates every aspect of our projects to ensure timely and successful completion.", image: "https://images.pexels.com/photos/4049870/pexels-photo-4049870.jpeg" },
];

const socialLinks = [
  { icon: <FaFacebookF />, url: "#" },
  { icon: <FaTwitter />, url: "#" },
  { icon: <FaLinkedinIn />, url: "#" },
];

const TeamSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Meet Our Team
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-gray-600 max-w-2xl mx-auto">
          The talented individuals behind KitchenCraft
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
          >
            {/* Member Image */}
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
              <div className="flex space-x-4 mb-4">
                {socialLinks.map((link, idx) => (
                  <a key={idx} href={link.url} className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full hover:bg-amber-600 hover:border-amber-600 transition duration-300">
                    {link.icon}
                  </a>
                ))}
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-amber-400 mb-2">{member.role}</p>
              <p className="text-sm text-center px-4">{member.bio}</p>
            </div>

            {/* Card Info (default state) */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-amber-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
