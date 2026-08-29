import type { SocialLink } from '../types'
const symbols: Record<SocialLink['icon'], string> = { github: 'GH', linkedin: 'in', mail: '@', scholar: 'GS', researchgate: 'RG', orcid: 'ID', location: '⌖' }
export function SocialIcon({ type }: { type: SocialLink['icon'] }) { return <span className="social-icon" aria-hidden="true">{symbols[type]}</span> }
