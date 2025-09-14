import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../Components/BlogData';

const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Design Trends', 'Small Spaces', 'Sustainability', 'Lighting', 'Materials', 'Technology', 'Color Theory', 'Layout', 'Budget'];

  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/6970063/pexels-photo-6970063.jpeg" 
            alt="Kitchen Blog" 
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
            Kitchen Design Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Inspiration, tips, and trends for creating your dream kitchen
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest Articles</h2>
              <p className="text-gray-600">Expert insights and inspiration for your kitchen project</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                      filter === category
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative group">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-amber-600 transition duration-300">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition duration-300"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No posts found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Subscribe to Our Newsletter
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white mb-8"
            >
              Get the latest kitchen design trends, tips, and exclusive offers delivered to your inbox
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-6 py-3 ring-1 ring-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white flex-grow max-w-md"
              />
              <button className="bg-white text-amber-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
                Subscribe
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;