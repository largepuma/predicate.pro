import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import UseCases from '@/components/UseCases'
import Products from '@/components/Products'
import Why from '@/components/Why'
import Pricing from '@/components/Pricing'
import Roadmap from '@/components/Roadmap'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <HowItWorks />
      <UseCases />
      <Products />
      <hr className="divider" />
      <Why />
      <Pricing />
      <Roadmap />
      <CtaBanner />
      <Footer />
    </>
  )
}
