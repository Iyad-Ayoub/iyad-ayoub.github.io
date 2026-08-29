import { SectionHeading } from '../components/SectionHeading'
import { expertise } from '../data/expertise'

export function ExpertiseSection() {
  return <section className="section expertise-section" id="expertise"><div className="container"><SectionHeading eyebrow="Technical expertise" title="Research translated into engineering systems." /><div className="expertise-grid">{expertise.map((category) => <article className="expertise-card" key={category.title}><h3>{category.title}</h3><p>{category.skills.join(' · ')}</p></article>)}</div></div></section>
}
