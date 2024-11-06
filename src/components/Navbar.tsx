import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useClerk } from '@clerk/clerk-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { openSignIn, openSignUp } = useClerk();
  const navigate = useNavigate();

  const handleSignIn = () => {
    openSignIn({
      redirectUrl: 'https://app.heisenbergai.site/',
    });
  };

  const handleSignUp = () => {
    openSignUp({
      redirectUrl: 'https://app.heisenbergai.site/',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">Heisenberg</span>
            <span className="px-2 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded">Beta</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600">Contact</Link>
            <button 
              onClick={handleSignIn}
              className="px-4 py-2 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50"
            >
              Login
            </button>
            <button 
              onClick={handleSignUp}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="space-y-2 pt-4">
                <button 
                  onClick={handleSignIn}
                  className="w-full px-4 py-2 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50"
                >
                  Login
                </button>
                <button 
                  onClick={handleSignUp}
                  className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;