import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { researchProjects } from '../data/projects'
export function ProjectsSection() { return <section className="section" id="projects"><div className="container"><SectionHeading eyebrow="Current & selected research" title="Research directions in focus." intro="Concrete research and software initiatives spanning mapping, perception, data infrastructure, and multimodal autonomy." /><div className="project-grid">{researchProjects.map((project) => <ProjectCard key={project.title} project={project} />)}</div></div></section> }
