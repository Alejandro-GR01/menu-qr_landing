import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Comparison } from '@/components/Comparison'
import { TechStack } from '@/components/TechStack'
import { DownloadSection } from '@/components/DownloadSection'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Comparison />
        <TechStack />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
