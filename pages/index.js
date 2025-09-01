import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ServicesOverview from '../components/ServicesOverview'
import PortfolioPreview from '../components/PortfolioPreview'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'

export default function Home() {
  return (
    <Layout 
      title="Home"
      description="Engineering Design Solutions in CAD, CAE, FEA & Solar Structures. SolidCanvas specializes in mechanical engineering, CAD modeling, CAE, FEA, and solar structure design."
    >
      <Hero />
      <Stats />
      <ServicesOverview />
      <PortfolioPreview />
      <Testimonials />
    </Layout>
  )
}
