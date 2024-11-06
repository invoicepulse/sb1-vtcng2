import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Zap, Shield, BarChart } from 'lucide-react';
import { useClerk } from '@clerk/clerk-react';
import FeatureTab from '../components/FeatureTab';
import UseCaseCard from '../components/UseCaseCard';
import PricingCard from '../components/PricingCard';

const Home = () => {
  const { openSignUp } = useClerk();

  const handleGetStarted = () => {
    openSignUp({
      redirectUrl: 'https://app.heisenbergai.site/',
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: '6%' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  Meet Heisenberg, your AI Business Consultant
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                  Transform your business decisions with AI-powered insights and real-time strategic guidance
                </p>
              </motion.div>
              
              <div className="space-y-4">
                <button 
                  onClick={handleGetStarted}
                  className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center space-x-2"
                >
                  <span>Get Started Free</span>
                  <ArrowRight size={20} />
                </button>
                <p className="text-sm text-gray-600">No Credit Card Required</p>
              </div>
            </div>
            
            <div className="lg:pl-8" style={{ marginLeft: '10%', paddingLeft: '20px' }}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Test Heisenberg without Sign up
                </h3>
                <iframe 
                  id="audio_iframe" 
                  src="https://widget.synthflow.ai/widget/v2/1730872545114x310800936717137800/1730872544991x315974364655777100" 
                  allow="microphone" 
                  width="350" 
                  height="470" 
                  style={{
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                  }}
                />
                <p className="text-sm text-gray-600">
                  Sign up required after 60 seconds of conversation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Powerful Features for Your Business
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureTab
              icon={<MessageSquare className="text-primary-600" size={24} />}
              title="Real-time Voice Conversation"
              description="Engage in natural, fluid conversations with our AI consultant using advanced voice recognition"
            />
            <FeatureTab
              icon={<Zap className="text-primary-600" size={24} />}
              title="Improved Human-like Interaction"
              description="Experience conversations that feel natural and intuitive, powered by advanced AI"
            />
            <FeatureTab
              icon={<Shield className="text-primary-600" size={24} />}
              title="Smart Suggestions"
              description="Receive contextual, actionable recommendations based on your business needs"
            />
            <FeatureTab
              icon={<BarChart className="text-primary-600" size={24} />}
              title="Session Notes"
              description="Automatically capture and organize key insights from every consultation"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Transform Every Aspect of Your Business
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UseCaseCard
              title="Business Operations Support"
              description="Optimize workflows, manage resources efficiently, and streamline processes with AI-driven insights"
              items={[
                "Operational efficiency optimization",
                "Resource allocation management",
                "Process documentation",
                "Digital transformation guidance",
                "Supply chain optimization"
              ]}
            />
            <UseCaseCard
              title="Customer Service Excellence"
              description="Elevate your customer service with AI-powered strategies and best practices"
              items={[
                "Customer support protocols",
                "Conflict resolution strategies",
                "Feedback analysis",
                "Support channel optimization",
                "Customer engagement improvement"
              ]}
            />
            <UseCaseCard
              title="Marketing and Growth"
              description="Accelerate your business growth with data-driven marketing strategies"
              items={[
                "Digital marketing strategies",
                "Social media optimization",
                "Lead generation tactics",
                "Market research insights",
                "Campaign ROI measurement"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Simple, Transparent Pricing
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title={
                <div className="flex items-center space-x-2">
                  <span>Starter</span>
                  <span className="px-2 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded">Beta</span>
                </div>
              }
              price="0"
              description="Perfect for trying out Heisenberg"
              features={[
                "4 minutes conversation quota",
                "Real time notes",
                "Real time AI voice chat"
              ]}
              buttonText="Start Free"
              highlighted={true}
              onButtonClick={handleGetStarted}
            />
            <PricingCard
              title="Professional"
              price="49"
              description="For growing businesses"
              features={[
                "Unlimited conversations",
                "Voice interactions",
                "Advanced insights",
                "Session recordings",
                "Priority support"
              ]}
              buttonText="Launching Soon"
              highlighted={false}
              disabled={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
