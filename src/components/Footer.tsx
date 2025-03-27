import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-yellow-400" />
                info@diversiworks.co.ke
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-yellow-400" />
                +254794068508
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
                Nairobi, Kenya
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-400">Home</a></li>
              <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
              <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              DiversiWorks is your trusted partner in creating customized software solutions that drive business growth and efficiency.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} DiversiWorks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}