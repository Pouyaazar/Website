import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import ServicesSection from '../sections/ServicesSection'
import ProjectsSection from '../sections/ProjectsSection'
import CadTeaserSection from '../sections/CadTeaserSection'
import ExperienceSection from '../sections/ExperienceSection'
import PublicationsSection from '../sections/PublicationsSection'
import CertificationsSection from '../sections/CertificationsSection'
import TeachingSection from '../sections/TeachingSection'
import FooterSection from '../sections/FooterSection'

export default function HomePage() {
  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CadTeaserSection />
      <ExperienceSection />
      <PublicationsSection />
      <CertificationsSection />
      <TeachingSection />
      <FooterSection />
    </main>
  )
}
