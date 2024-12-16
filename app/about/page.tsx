import Layout from '../components/Layout'
import Image from 'next/image'

export default function About() {
  return (
    <Layout
      title="About Us"
      description="Learn about TUK SIMPLIFIERS LTD and our mission to simplify power-related services in Nigeria"
    >
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-text-dark">About TUK SIMPLIFIERS LTD</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="TUK SIMPLIFIERS LTD Team"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Our Mission</h2>
              <p className="text-text-dark mb-6">
                At TUK SIMPLIFIERS LTD, our mission is to simplify power-related services for individuals and businesses across Nigeria. We strive to bridge the gap between consumers and power distribution companies, ensuring fair treatment, efficient service delivery, and peace of mind for our clients.
              </p>
              <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Our Founder</h2>
              <p className="text-text-dark mb-6">
                TUK SIMPLIFIERS LTD was founded by Aghaduno Okechukwu Benedict, a visionary entrepreneur with extensive experience in Nigeria's power sector. Recognizing the challenges faced by consumers in dealing with power-related issues, Okechukwu established TUK SIMPLIFIERS LTD to provide expert assistance and advocacy for Nigerians.
              </p>
              <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Our Commitment</h2>
              <p className="text-text-dark">
                We are committed to delivering exceptional service, maintaining the highest standards of integrity, and continuously innovating to meet the evolving needs of our clients. With TUK SIMPLIFIERS LTD, you can expect transparent, efficient, and reliable solutions to all your power-related challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

