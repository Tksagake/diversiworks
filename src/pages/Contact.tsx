import { Mail, Phone, MapPin, Users, Target, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Contact Header */}
      <div className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
          <p className="text-xl text-center text-gray-300">Get in touch with our team</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-navy-900 py-2 px-4 rounded-md font-semibold hover:bg-yellow-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-yellow-400 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@diversiworks.co.ke</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-yellow-400 mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+254794068508</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-yellow-400 mr-4" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* About Us Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">About Us</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Our Mission</h3>
                    <p className="text-gray-600">To provide innovative and efficient software solutions that empower businesses to achieve their full potential.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Our Team</h3>
                    <p className="text-gray-600">A dedicated team of experienced professionals committed to delivering excellence in software development.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}