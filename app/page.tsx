import Layout from './components/Layout'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <Layout
      title="Home"
      description="TUK SIMPLIFIERS LTD - Your trusted partner for power-related services in Nigeria"
    >
      <section className="bg-gradient-primary text-accent-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simplifying Power Solutions in Nigeria
          </h1>
          <p className="text-xl mb-8">
            TUK SIMPLIFIERS LTD: Your trusted partner for resolving DISCO disputes, procuring materials, and convenient meter recharging.
          </p>
          <Link
            href="/services"
            className="bg-primary-yellow text-text-dark px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300 inline-flex items-center"
          >
            Our Services <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-text-dark">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'DISCO Dispute Resolution',
                description: 'We help resolve conflicts with Distribution Companies efficiently.',
              },
              {
                title: 'Material Procurement',
                description: 'Assistance in procuring materials from Nigeria\'s power provider.',
              },
              {
                title: 'Meter Recharging',
                description: 'Convenient and hassle-free meter recharging services.',
              },
            ].map((service, index) => (
              <div key={index} className="bg-accent-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary-blue">{service.title}</h3>
                <p className="text-text-dark">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-green text-accent-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your Power Solutions?</h2>
          <p className="text-xl mb-8">Contact us today for expert assistance and peace of mind.</p>
          <Link
            href="/contact"
            className="bg-primary-yellow text-text-dark px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  )
}

