export interface ResearchArea { title: string; description: string; tag: string }
export interface ResearchProject { title: string; description: string; status?: string; technologies: string[]; repositoryUrl?: string; publicationUrl?: string; projectUrl?: string; image?: string }
export interface Experience { id: string; institution: string; role: string; period: string; location: string; highlights: string[] }
export interface Publication { title: string; authors: string; venue?: string; year?: number; doi?: string; pdfUrl?: string; codeUrl?: string; bibtexUrl?: string; isPlaceholder?: boolean }
export interface Education { institution: string; degree?: string; field?: string; period?: string }
export interface SocialLink { label: string; url?: string; icon: 'github' | 'linkedin' | 'mail' | 'scholar' | 'researchgate' | 'orcid' | 'location' }
export interface ImpactMetric { label: string; value?: string; note: string }
export interface ExpertiseCategory { title: string; skills: string[] }
