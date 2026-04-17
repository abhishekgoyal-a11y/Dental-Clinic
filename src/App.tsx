import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { SkipToContent } from './components/layout/SkipToContent'
import { StickyBookingBar } from './components/layout/StickyBookingBar'
import { AboutDentist } from './components/sections/AboutDentist'
import { BeforeAfterGallery } from './components/sections/BeforeAfterGallery'
import { BookingForm } from './components/sections/BookingForm'
import { Contact } from './components/sections/Contact'
import { FirstVisit } from './components/sections/FirstVisit'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { TeamStrip } from './components/sections/TeamStrip'
import { Testimonials } from './components/sections/Testimonials'
import { TrustStrip } from './components/sections/TrustStrip'
import { WhyChooseUs } from './components/sections/WhyChooseUs'

function App() {
  return (
    <div className="min-h-svh bg-white pb-20 text-slate-800 lg:pb-0">
      <SkipToContent />
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <AboutDentist />
        <TeamStrip />
        <WhyChooseUs />
        <FirstVisit />
        <Testimonials />
        <BeforeAfterGallery />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <StickyBookingBar />
    </div>
  )
}

export default App
