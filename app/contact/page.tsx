'use client';

import { useState } from 'react';
import Layout from '../components/Layout';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      } else {
        setStatus('error');
        setErrorMessage(result.details || 'An error occurred. Please try again.');
        alert(`Failed to send message: ${result.details || 'Unknown error'}`);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred.');
      alert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with TUK SIMPLIFIERS LTD for all your power-related service needs in Nigeria"
    >
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-text-dark">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary-blue">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium text-text-dark">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg bg-white text-black focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium text-text-dark">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg bg-white text-black focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium text-text-dark">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg bg-white text-black focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary-green text-accent-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary-blue">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-primary-green mr-4" size={24} />
                  <p className="text-text-dark">17, Ogundana Street, Off Allen Avenue, Ikeja, Lagos.</p>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary-green mr-4" size={24} />
                  <p className="text-text-dark">+234 903 023 0625</p>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary-green mr-4" size={24} />
                  <p className="text-text-dark">tuksimplifiers@gmail.com</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-primary-blue">Office Hours</h3>
                <p className="text-text-dark">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-text-dark">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-text-dark">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
