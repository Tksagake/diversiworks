import { Menu, X, Building2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-xl font-bold">DiversiWorks</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/services" className="hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/contact" className="hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:text-yellow-400 px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="block hover:text-yellow-400 px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="block hover:text-yellow-400 px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>Services</Link>
            <Link to="/contact" className="block hover:text-yellow-400 px-3 py-2 rounded-md text-base font-medium" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}