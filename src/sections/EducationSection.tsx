import { SectionHeading } from '../components/SectionHeading'
import { education } from '../data/education'
export function EducationSection() { return <section className="section" id="education"><div className="container"><SectionHeading eyebrow="Education" title="Academic preparation." /><div className="education-grid">{education.map((item, index) => <article className="education-card" key={index}><p className="eyebrow">{item.period}</p><h3>{item.degree}</h3><p>{item.field}</p><p className="institution">{item.institution}</p></article>)}</div></div></section> }
