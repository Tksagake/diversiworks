import { Target, Heart, Star, Users } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: Heart,
      title: "Customer Focus",
      description: "We put our clients first, understanding their unique needs and delivering solutions that exceed expectations."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership with our clients to achieve the best results."
    }
  ];

  const team = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "With over 15 years of experience in software development and business management."
    },
    {
      name: "Sarah Smith",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Expert in system architecture and emerging technologies."
    },
    {
      name: "Michael Johnson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description: "Specializes in creating robust and scalable software solutions."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* About Header */}
      <div className="bg-navy-900 text-white py-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Team Collaboration"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold text-center mb-6">About DiversiWorks</h1>
          <p className="text-xl text-center text-gray-300">Building the future of software solutions</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower businesses through innovative software solutions that drive growth, efficiency, and success. We are committed to delivering high-quality, customized solutions that address our clients' unique challenges and help them achieve their goals.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading provider of innovative software solutions in East Africa, recognized for our excellence, reliability, and commitment to customer success. We aim to transform businesses through technology and create lasting positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <value.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-yellow-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}