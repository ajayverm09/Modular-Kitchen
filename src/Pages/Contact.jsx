import { useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/contact-hero/1920/600.jpg" 
            alt="Contact KitchenCraft" 
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Get in touch with our team to start your kitchen transformation journey
          </motion.p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📍",
                title: "Visit Our Showroom",
                description: "123 Kitchen Street, Design District, New York, NY 10001",
                action: "Get Directions"
              },
              {
                icon: "📞",
                title: "Call Us",
                description: "(555) 123-4567",
                action: "Call Now"
              },
              {
                icon: "✉️",
                title: "Email Us",
                description: "info@kitchencraft.com",
                action: "Send Email"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <button className="text-amber-600 font-medium hover:text-amber-700 transition duration-300">
                  {item.action}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="design">Kitchen Design</option>
                    <option value="renovation">Renovation Quote</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us about your kitchen project..."
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input 
                      id="newsletter" 
                      type="checkbox" 
                      className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newsletter" className="text-gray-600">
                      I would like to receive newsletter with kitchen design tips and special offers
                    </label>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            
            {/* Business Hours and Map */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Visit Our Showroom</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Closed" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between border-b border-gray-100 pb-3">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose KitchenCraft?</h3>
                <ul className="space-y-3">
                  {[
                    "15+ years of experience in kitchen design",
                    "Personalized design solutions tailored to your needs",
                    "High-quality materials and craftsmanship",
                    "Transparent pricing with no hidden fees",
                    "Dedicated project management"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl overflow-hidden h-80 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-gray-500 text-sm mt-2">123 Kitchen Street, Design District, New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Find answers to common questions about our services</p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical kitchen renovation take?",
                  answer: "The timeline for a kitchen renovation varies depending on the scope of the project. A simple update might take 2-3 weeks, while a complete renovation could take 6-8 weeks or more. We'll provide you with a detailed timeline during the consultation phase."
                },
                {
                  question: "Do you offer free consultations?",
                  answer: "Yes, we offer complimentary in-home consultations to discuss your project, assess your space, and provide initial design concepts and cost estimates."
                },
                {
                  question: "What is your design process?",
                  answer: "Our design process begins with a consultation to understand your needs and preferences. We then create 3D renderings and material samples for your approval. Once the design is finalized, we provide a detailed quote and timeline for the project."
                },
                {
                  question: "Do you provide warranties on your work?",
                  answer: "Yes, we stand behind our work with comprehensive warranties on both materials and craftsmanship. Specific warranty terms vary depending on the products and services selected."
                },
                {
                  question: "Can you work within my budget?",
                  answer: "Absolutely! We work with a wide range of budgets and can help you prioritize elements to get the most value for your investment. We'll be transparent about costs and help you make informed decisions."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-6"
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
            Schedule a free consultation with our design experts today
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="#contact-form" 
              className="inline-block bg-white hover:bg-gray-100 text-amber-600 font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Schedule Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;