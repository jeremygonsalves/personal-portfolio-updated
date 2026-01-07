import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Database } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-purple-900/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Database className="h-8 w-8 text-purple-500" />
            <span className="font-bold text-xl">Portfolio</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border ${
                  location.pathname === '/' 
                    ? 'bg-purple-600/80 text-white border-purple-500 shadow-lg' 
                    : 'bg-black/20 text-white border-white/30 hover:bg-purple-600/40 hover:border-purple-400 hover:shadow-md'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className={`px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border ${
                  location.pathname === '/projects' 
                    ? 'bg-purple-600/80 text-white border-purple-500 shadow-lg' 
                    : 'bg-black/20 text-white border-white/30 hover:bg-purple-600/40 hover:border-purple-400 hover:shadow-md'
                }`}
              >
                Projects
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-purple-900/90 backdrop-blur-sm">
          <Link 
            to="/" 
            className={`block px-4 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm border ${
              location.pathname === '/' 
                ? 'bg-purple-600/80 text-white border-purple-500' 
                : 'bg-black/20 text-white border-white/30 hover:bg-purple-600/40 hover:border-purple-400'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`block px-4 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm border ${
              location.pathname === '/projects' 
                ? 'bg-purple-600/80 text-white border-purple-500' 
                : 'bg-black/20 text-white border-white/30 hover:bg-purple-600/40 hover:border-purple-400'
            }`}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;