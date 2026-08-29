import { Header } from './components/Header'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { EducationSection } from './sections/EducationSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ExpertiseSection } from './sections/ExpertiseSection'
import { HeroSection } from './sections/HeroSection'
import { LeadershipSection } from './sections/LeadershipSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { PublicationsSection } from './sections/PublicationsSection'
import { ResearchSection } from './sections/ResearchSection'
import { TeachingSection } from './sections/TeachingSection'

function App() {
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content"><HeroSection /><AboutSection /><ResearchSection /><ProjectsSection /><ExperienceSection /><LeadershipSection /><PublicationsSection /><ExpertiseSection /><TeachingSection /><EducationSection /><ContactSection /></main><footer className="site-footer"><div className="container"><p>© {new Date().getFullYear()} Dr. Iyad Abuhadrous. All rights reserved.</p></div></footer></div>
}

export default App
