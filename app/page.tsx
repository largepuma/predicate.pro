import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Why from '@/components/Why'
import Roadmap from '@/components/Roadmap'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Products />
      <hr className="divider" />
      <Why />
      <Roadmap />
      <CtaBanner />
      <Footer />
    </>
  )
}
