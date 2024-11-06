import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-600">Heisenberg AI</h3>
            <p className="text-gray-600">
              Your AI-powered business consultant available 24/7.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-600">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-600">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-600">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary-600">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary-600">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Heisenberg AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;