'use client'

import Layout from '../components/Layout'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What services does TUK SIMPLIFIERS LTD offer?',
    answer: 'TUK SIMPLIFIERS LTD offers a range of power-related services, including DISCO dispute resolution, material procurement from Nigeria\'s power provider, and convenient meter recharging services.',
  },
  {
    question: 'How can TUK SIMPLIFIERS LTD help with DISCO disputes?',
    answer: 'We act as mediators between customers and Distribution Companies (DISCOs), helping to resolve conflicts related to billing, connections, and other power-related issues. Our team has extensive experience in navigating these disputes and ensuring fair outcomes for our clients.',
  },
  {
    question: 'What is the process for meter recharging through TUK SIMPLIFIERS LTD?',
    answer: 'Our meter recharging service is designed to be quick and convenient. You can initiate a recharge request through our website or by contacting our customer service team. We\'ll process your request and ensure your meter is recharged promptly, saving you time and hassle.',
  },
  {
    question: 'Does TUK SIMPLIFIERS LTD operate throughout Nigeria?',
    answer: 'While we are based in Lagos, we offer our services to clients across Nigeria. However, some services may be limited to certain regions due to local regulations and partnerships. Please contact us for specific information about service availability in your area.',
  },
  {
    question: 'How can I get started with TUK SIMPLIFIERS LTD\'s services?',
    answer: 'To get started, simply reach out to us through our contact page or give us a call. Our team will assess your needs and guide you through the process of engaging our services. We\'re committed to providing personalized solutions for each client.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Layout
      title="FAQs"
      description="Find answers to frequently asked questions about TUK SIMPLIFIERS LTD and our power-related services"
    >
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-text-dark">Frequently Asked Questions</h1>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-left p-4 bg-accent-white rounded-lg shadow-md"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-text-dark">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-primary-blue" size={20} />
                  ) : (
                    <ChevronDown className="text-primary-blue" size={20} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="mt-2 p-4 bg-primary-yellow bg-opacity-10 rounded-lg">
                    <p className="text-text-dark">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

