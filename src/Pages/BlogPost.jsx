import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../Components/BlogData';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the blog post with the matching ID
    const foundPost = blogPosts.find(post => post.id === parseInt(id));
    setPost(foundPost);
    setLoading(false);
  }, [id]);

  // Find related posts (excluding current post)
  const relatedPosts = post 
    ? blogPosts
        .filter(p => p.id !== post.id && p.category === post.category)
        .slice(0, 3)
    : [];

  if (loading) {
    return (
      <div className="pt-16 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-16">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blogs" 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto"
          >
            {post.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-300"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              By {post.author}
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {post.category}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-gray-700">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{post.author}</h3>
                    <p className="text-gray-600 text-sm">Kitchen Design Expert</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition duration-300">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition duration-300">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition duration-300">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <Link 
                to="/blogs" 
                className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Articles
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                  >
                    <Link to={`/blog/${relatedPost.id}`}>
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-40 object-cover"
                      />
                    </Link>
                    <div className="p-4">
                      <div className="text-xs text-amber-600 font-medium mb-2">{relatedPost.category}</div>
                      <Link to={`/blog/${relatedPost.id}`}>
                        <h3 className="font-semibold text-gray-800 mb-2 hover:text-amber-600 transition duration-300">
                          {relatedPost.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="text-amber-600 text-sm font-medium hover:text-amber-700 transition duration-300"
                      >
                        Read More →
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;