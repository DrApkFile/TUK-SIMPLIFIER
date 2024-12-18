import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Tuk Simplifiers` : 'Tuk Simplifiers'}</title>
        <meta name="description" content={description || 'Tuk Simplifiers - Power-related services in Nigeria'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

