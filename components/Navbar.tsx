'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',           href: '/' },
  { label: 'Specialities',   href: '/specialities' },
  { label: 'Doctors',        href: '/doctors' },
  { label: 'Patients',       href: '/patients' },
  { label: 'Health Tourism', href: '/health-tourism' },
  { label: 'About',          href: '/about' },
]

const CrossIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="11" y="2"  width="6" height="24" rx="2" fill="#0ABFBC" />
    <rect x="2"  y="11" width="24" height="6"  rx="2" fill="#0ABFBC" />
  </svg>
)

const NavLogo = () => (
  <Link href="/" className="flex items-center gap-2 shrink-0">
    <CrossIcon />
    <span className="font-display font-bold text-white text-[22px] leading-none">
      Jamma
    </span>
    <div className="w-px h-7 bg-white/20 mx-2 shrink-0" />
    <span className="font-body text-[11px] text-white/50 leading-none">
      Speciality Hospital
    </span>
  </Link>
)

const NavLinks = () => (
  <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
    {NAV_LINKS.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="rounded-full px-4 py-1.5 text-sm text-white hover:bg-white/10 transition-colors duration-150"
      >
        {link.label}
      </Link>
    ))}
  </nav>
)

function MobileDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="overflow-hidden bg-[var(--navy)] border-t border-white/10 md:hidden"
        >
          <div className="flex flex-col px-4 pt-3 pb-5 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-full px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 px-2">
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full text-center bg-[var(--teal)] rounded-full px-5 py-2.5 text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        className={[
          'bg-[var(--navy)] transition-all duration-200',
          isScrolled ? 'backdrop-blur-md border-b border-white/10' : '',
        ].join(' ')}
      >
        <div className="flex items-center justify-between h-16 md:h-[72px] px-6 md:px-10 max-w-[1440px] mx-auto">
          <NavLogo />
          <NavLinks />

          {/* Desktop: search + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/search"
              aria-label="Search"
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 transition-colors duration-150"
            >
              <Search className="w-[18px] h-[18px] text-white/70" strokeWidth={2} />
            </Link>
            <Link
              href="/contact"
              className="bg-[var(--teal)] rounded-full px-5 py-2 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen
              ? <X    className="w-5 h-5 text-white" />
              : <Menu className="w-5 h-5 text-white" />
            }
          </button>
        </div>
      </nav>

      <MobileDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}
