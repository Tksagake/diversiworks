import { CheckCircle2, Users, Building, Briefcase, Server, Shield, ShoppingCart, Truck, CreditCard } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Debt Collection CRM',
      icon: Briefcase,
      description: 'Streamline your debt collection process with our comprehensive CRM solution. Features include automated reminders, payment tracking, and detailed reporting.',
      features: ['Automated workflows', 'Payment tracking', 'Debtor management', 'Reporting dashboard'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sales CRM',
      icon: Users,
      description: 'Boost your sales performance with our intuitive CRM system. Track leads, manage opportunities, and close deals more effectively.',
      features: ['Lead management', 'Pipeline tracking', 'Performance analytics', 'Mobile access'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'School Management System',
      icon: Building,
      description: 'Comprehensive solution for educational institutions. Manage students, staff, courses, and administrative tasks efficiently.',
      features: ['Student information system', 'Attendance tracking', 'Grade management', 'Parent portal'],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Healthcare Systems',
      icon: CheckCircle2,
      description: 'Digital solutions for healthcare providers. Streamline patient care, appointments, and medical records management.',
      features: ['Electronic health records', 'Appointment scheduling', 'Billing management', 'Patient portal'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hotel Management Systems',
      icon: Server,
      description: 'All-in-one solution for hotel operations. Manage bookings, rooms, staff, and guest services efficiently.',
      features: ['Reservation management', 'Room allocation', 'Staff scheduling', 'Guest services'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'E-commerce Platform',
      icon: ShoppingCart,
      description: 'Empower your online business with our comprehensive e-commerce solution. Features include product catalog management, secure payment processing, and customer reviews.',
      features: ['Product catalog management', 'Secure payment processing', 'Customer reviews', 'Order tracking'],
      image: 'https://plus.unsplash.com/premium_photo-1681488350342-19084ba8e224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww'
    },
    {
      title: 'Point of Sale (PoS) System',
      icon: CreditCard,
      description: 'Enhance your retail operations with our intuitive PoS system. Features include real-time inventory tracking, sales reporting, and customer relationship management.',
      features: ['Real-time inventory tracking', 'Sales reporting', 'Customer management', 'Multi-payment options'],
      image: 'https://images.unsplash.com/photo-1602665742701-389671bc40c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UG9pbnQlMjBvZiUyMFNhbGV8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Logistics Management System',
      icon: Truck,
      description: 'Optimize your supply chain with our logistics management system. Features include shipment tracking, warehouse management, and route optimization.',
      features: ['Shipment tracking', 'Warehouse management', 'Route optimization', 'Inventory forecasting'],
      image: 'https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxvZ2lzdGljc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Security CRM',
      icon: Shield,
      description: 'Safeguard your customer data with our security-focused CRM. Features include data encryption, access controls, and activity monitoring to ensure compliance and protect sensitive information.',
      features: ['Data encryption', 'Access controls', 'Activity monitoring', 'Compliance management'],
      image: 'https://plus.unsplash.com/premium_photo-1674582744373-c0805c281744?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VjdXJpdHl8ZW58MHx8MHx8fDA%3D'
    }
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

  return (
    <div className="min-h-screen">
      {/* Services Header */}
      <div className="bg-navy-900 text-white py-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
          <p className="text-xl text-center text-gray-300">Comprehensive software solutions tailored to your business needs</p>
        </div>
      </div>

      {/* Detailed Services */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-full">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <service.icon className="h-12 w-12 text-yellow-400 mr-4" />
                      <h2 className="text-2xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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
    </div>
  );
}