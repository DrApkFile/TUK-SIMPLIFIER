import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-background-dark text-text-light">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TUK SIMPLIFIERS LTD</h3>
            <p className="text-sm">Simplifying power-related services in Nigeria</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-primary-yellow transition-colors">Home</Link>
              <Link href="/services" className="hover:text-primary-yellow transition-colors">Services</Link>
              <Link href="/about" className="hover:text-primary-yellow transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-primary-yellow transition-colors">Contact</Link>
              <Link href="/faq" className="hover:text-primary-yellow transition-colors">FAQs</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">17, Ogundana Street, Off Allen Avenue, Ikeja, Lagos.</p>
            <p className="text-sm mb-2">Phone: +234 903 023 0625</p>
            <p className="text-sm mb-2">Email: tuksimplifiers@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-sm">
            <p><strong>Legal Details:</strong></p>
            <p>Name: TUK SIMPLIFIERS LTD</p>
            <p>Legal Address: 17, Ogundana Street, Off Allen Avenue, Ikeja, Lagos.</p>
            <p>Individual: Aghaduno Okechukwu Benedict</p>
            <p>Role: Person with Significant Control</p>
            <p>Ownership: Full</p>
            <p>Appointed on: 18 Jan 2023</p>
            <p>Jurisdiction: Nigeria</p>
          </div>
          <div className="mt-4 text-center text-sm">
            &copy; {new Date().getFullYear()} TUK SIMPLIFIERS LTD. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

