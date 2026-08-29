import { useState } from 'react'

const navigation = ['Home', 'About', 'Research', 'Projects', 'Experience', 'Publications', 'Expertise', 'Contact']

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return <header className="site-header"><div className="container nav-wrap"><a className="wordmark" href="#home" onClick={() => setIsOpen(false)}><span>IA</span><span>Dr. Iyad Abuhadrous</span></a><button className="menu-button" type="button" aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen(!isOpen)}><span className="sr-only">{isOpen ? 'Close' : 'Open'} navigation</span><span aria-hidden="true">{isOpen ? '×' : '☰'}</span></button><nav id="primary-navigation" className={isOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation"><ul>{navigation.map((item) => <li key={item}><a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>{item}</a></li>)}</ul></nav></div></header>
}
