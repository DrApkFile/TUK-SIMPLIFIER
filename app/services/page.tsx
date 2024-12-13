import Layout from '../../components/Layout'
import { CheckCircle } from 'lucide-react'

const services = [
  {
    title: 'DISCO Dispute Resolution',
    description: 'We mediate and resolve conflicts between customers and Distribution Companies (DISCOs) to ensure fair treatment and billing.',
    features: [
      'Expert negotiation with DISCOs',
      'Bill auditing and verification',
      'Resolution of connection issues',
      'Advocacy for customer rights',
    ],
  },
  {
    title: 'Material Procurement',
    description: 'We assist in procuring necessary materials from Nigeria\'s power provider, ensuring quality and compliance with regulations.',
    features: [
      'Sourcing of electrical equipment',
      'Quality assurance checks',
      'Liaison with power providers',
      'Streamlined procurement process',
    ],
  },
  {
    title: 'Meter Recharging',
    description: 'Our convenient meter recharging service saves you time and ensures uninterrupted power supply to your home or business.',
    features: [
      'Quick and easy recharging process',
      'Multiple payment options',
      'Real-time balance updates',
      '24/7 recharge availability',
    ],
  },
  {
    title: 'Power Consultation',
    description: 'We provide expert advice on power-related matters to help you make informed decisions and optimize your energy usage.',
    features: [
      'Energy efficiency audits',
      'Power system design recommendations',
      'Regulatory compliance guidance',
      'Cost-saving strategies',
    ],
  },
]

export default function Services() {
  return (
    <Layout
      title="Our Services"
      description="Explore the power-related services offered by Tuk Simplifiers in Nigeria"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

