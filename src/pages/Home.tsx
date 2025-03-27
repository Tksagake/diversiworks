import { CheckCircle2, Users, Building, Briefcase } from 'lucide-react';

export default function Home() {
  const services = [
    { title: 'Debt Collection CRM', icon: Briefcase },
    { title: 'Sales CRM', icon: Users },
    { title: 'School Management System', icon: Building },
    { title: 'Healthcare Systems', icon: CheckCircle2 },
    { title: 'Hotel Management Systems', icon: Building }
  ];

  const testimonials = [
    {
      name: "Hillary Wekesa",
      role: "CEO, Sary Networks Intl. LTD.",
      content: "DiversiWorks transformed our business operations with their custom CRM solution. The efficiency gains have been remarkable.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHAKUcWXcJ_ng/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1675361929913?e=1748476800&v=beta&t=vrZOV87-MQ_C711VWFog7GDe0ZnSxVtVfWfAzooyNq8"
    },
    {
      name: "Michael Johnson",
      role: "Director, VivaceKenya",
      content: "Their healthcare management system has streamlined our patient care processes significantly. Excellent work!",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHAKUcWXcJ_ng/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1675361929913?e=1748476800&v=beta&t=vrZOV87-MQ_C711VWFog7GDe0ZnSxVtVfWfAzooyNq8"
    }
  ];

  const portfolio = [
    {
      title: "Healthcare Management Dashboard",
      description: "Modern patient management system with real-time analytics",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "School Management Portal",
      description: "Comprehensive education management platform",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Hotel Booking System",
      description: "Streamlined reservation and guest management interface",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-navy-900 text-white py-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Custom Software Solutions for Your Business</h1>
            <p className="text-xl text-gray-300 mb-8">Transforming businesses with innovative software solutions</p>
            <a href="/contact" className="bg-yellow-400 text-navy-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition duration-300">
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition duration-300">
                <service.icon className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">Customized solutions tailored to your specific needs and requirements.</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">How long does it take to implement a custom solution?</h3>
              <p className="text-gray-600">Implementation time varies based on project complexity, typically ranging from 2-6 months.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Do you provide ongoing support?</h3>
              <p className="text-gray-600">Yes, we offer comprehensive support and maintenance packages for all our solutions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Can your solutions be integrated with existing systems?</h3>
              <p className="text-gray-600">Absolutely! Our solutions are designed to integrate seamlessly with your existing infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}