import { motion } from 'framer-motion';
import { Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Heisenberg AI
            </h1>
            <p className="text-xl text-gray-600">
              Revolutionizing business consulting through artificial intelligence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize access to high-quality business consulting through innovative AI technology.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Innovation, integrity, and excellence in every interaction and recommendation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world's leading AI-powered business consulting platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2024, Heisenberg AI emerged from a simple yet powerful idea: 
              what if every business, regardless of size, could access top-tier consulting advice 24/7?
            </p>
            <p className="text-gray-600 mb-6">
              Our team of AI experts, business consultants, and developers worked tirelessly to create 
              an AI consultant that combines deep business knowledge with natural conversation abilities.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve thousands of businesses worldwide, helping them make better 
              decisions and achieve their goals through AI-powered insights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;