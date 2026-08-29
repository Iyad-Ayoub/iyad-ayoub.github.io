import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { experience } from '../data/experience'
import type { Experience } from '../types'

const recentExperience = experience.slice(0, 5)
const earlierExperience = experience.slice(5)

function ExperienceItem({ item }: { item: Experience }) {
  return <article className="timeline-item"><div className="timeline-dot" /><div className="experience-content"><h3>{item.institution}</h3><p className="experience-role">{item.role}</p><p className="experience-location">{item.location}</p><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div><p className="timeline-period">{item.period}</p></article>
}

export function ExperienceSection() {
  const [showEarlierExperience, setShowEarlierExperience] = useState(false)

  return <section className="section section-tint" id="experience"><div className="container"><SectionHeading eyebrow="Professional experience" title="Academic and industrial R&D leadership." intro="A career spanning autonomous systems research, engineering education, innovation, and technology transfer." /><div className="timeline">{recentExperience.map((item) => <ExperienceItem item={item} key={item.id} />)}<div id="earlier-experience" aria-label="Earlier professional experience" hidden={!showEarlierExperience}>{earlierExperience.map((item) => <ExperienceItem item={item} key={item.id} />)}</div></div><button className="disclosure-button" type="button" aria-expanded={showEarlierExperience} aria-controls="earlier-experience" onClick={() => setShowEarlierExperience(!showEarlierExperience)}>{showEarlierExperience ? 'Show less' : `View earlier experience (${earlierExperience.length})`}</button></div></section>
}
