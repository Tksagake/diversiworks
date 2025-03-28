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
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We are committed to continuous learning and innovation, staying ahead of the curve in technology and trends."
    }
  ];

  const team = [
    {
      name: "Naftali Muthomi",
      role: "Managing Partner",
      image: "https://plus.unsplash.com/premium_vector-1683141132250-12daa3bd85cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
      description: "Experienced entrepreneur and software engineer with a passion for technology and business."
    },
    {
      name: "Sikolia Malcolm",
      role: "CTO",
      image: "https://res.cloudinary.com/dylmsnibf/image/upload/v1737532592/IMG_0267_uvs8li.jpg",
      description: "Expert in system architecture and emerging technologies."
    },
    {
      name: "Shama Bernard",
      role: "Lead Developer",
      image: "https://plus.unsplash.com/premium_vector-1683141132250-12daa3bd85cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
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