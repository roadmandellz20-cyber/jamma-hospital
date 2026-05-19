'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Brain, Scissors, Bone, Baby, ScanLine, Shield, Microscope, Droplets, Check } from 'lucide-react'

const TRUST_ITEMS = [
  'Specialist-Led Care',
  'Sub-Regional Training Hub',
  'Health Tourism Ready',
] as const

const SPECIALITIES = [
  { icon: Brain,       name: 'Neurology',          desc: 'Diagnosis and treatment of neurological conditions.' },
  { icon: Scissors,    name: 'Neurosurgery',        desc: 'Advanced surgical care for brain and spine conditions.' },
  { icon: Bone,        name: 'Orthopaedics',        desc: 'Bone, joint, and musculoskeletal surgery and care.' },
  { icon: Baby,        name: 'Paediatric Surgery',  desc: 'Specialist surgical care for infants and children.' },
  { icon: ScanLine,    name: 'Radiology',           desc: 'Medical imaging for precise diagnosis and reporting.' },
  { icon: Shield,      name: 'Infectious Disease',  desc: 'Management of complex infectious and tropical diseases.' },
  { icon: Microscope,  name: 'Microbiology',        desc: 'Laboratory science supporting clinical diagnosis.' },
  { icon: Droplets,    name: 'Haematology',         desc: 'Diagnosis and treatment of blood-related conditions.' },
]

function TealDot() {
  return <span className="block w-2 h-2 rounded-full bg-[var(--teal)]" />
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <main className="min-h-screen bg-[var(--navy)] flex items-center">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 w-full py-16 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 md:gap-16 items-center">

            {/* LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="border border-white/20 rounded-full px-4 py-1 text-xs text-white/60 font-body mb-6 inline-block">
                Now Open in Senegambia, The Gambia
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-display">
                <span className="block text-white">Specialist Care,</span>
                <span className="block text-white">Right Here</span>
                <span className="block text-[var(--teal)]">at Home.</span>
              </h1>

              <p className="text-white/60 text-base md:text-lg mt-6 max-w-md font-body">
                Neurology. Neurosurgery. Orthopaedics. Paediatric Surgery.{' '}
                World-class specialist-led care — without leaving The Gambia.
              </p>

              <div className="mt-10 flex gap-4 flex-wrap">
                <Link href="/appointments" className="bg-[var(--teal)] text-white rounded-full px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity">
                  Book an Appointment
                </Link>
                <Link href="/specialities" className="border border-white/30 text-white rounded-full px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors">
                  Our Specialities <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 flex-wrap">
                {TRUST_ITEMS.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[var(--teal)] flex-shrink-0" />
                    <span className="text-xs font-body text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="relative w-full h-[320px] md:h-[580px]"
            >
              {/* Image placeholder */}
              <div
                className="w-full h-full rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0ABFBC15, #0B1D3A)' }}
              >
                <span className="text-white/20 text-sm">[ Hospital / Doctor Photo ]</span>
              </div>

              {/* Card 1 — top-left */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                className="absolute top-6 left-3 md:left-[-24px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-48"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <TealDot />
                  <span className="text-white/60 text-xs">Specialities</span>
                </div>
                <div className="text-4xl font-bold text-white font-display leading-none mb-1">8</div>
                <div className="text-white/50 text-xs">Medical Departments</div>
              </motion.div>

              {/* Card 2 — bottom-right */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                className="absolute bottom-6 right-3 md:right-[-24px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-52"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <TealDot />
                  <span className="text-white/60 text-xs">Est.</span>
                </div>
                <div className="text-white text-sm font-medium">First specialist hospital</div>
                <div className="text-white/50 text-xs">in Senegambia</div>
                <div className="border-t border-white/10 mt-2 pt-2">
                  <span className="bg-[var(--teal)]/20 text-[var(--teal)] text-xs rounded-full px-3 py-1 inline-block">
                    Health Tourism Ready
                  </span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </main>

      {/* ── SPECIALITIES ── */}
      <section className="bg-[var(--bg-light)] py-24 px-6 md:px-10">
        <div className="max-w-[1440px] mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center"
          >
            <span className="bg-[var(--teal)]/10 text-[var(--teal)] rounded-full px-4 py-1 text-xs font-medium inline-block mb-4">
              Medical Departments
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-[var(--text-dark)]">
              Our Specialities
            </h2>
            <p className="text-base md:text-lg mt-4 max-w-2xl mx-auto text-center font-body text-[var(--text-muted)]">
              Specialist-led care across eight departments, built for The Gambia and the wider sub-region.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {SPECIALITIES.map(({ icon: Icon, name, desc }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--teal)]/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[var(--teal)]" />
                </div>
                <div className="font-display font-semibold text-[var(--text-dark)] text-lg leading-snug">
                  {name}
                </div>
                <p className="font-body text-[var(--text-muted)] text-sm mt-2 leading-relaxed">
                  {desc}
                </p>
                <span className="text-[var(--teal)] text-sm font-medium mt-4 inline-block hover:underline">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Link
              href="/specialities"
              className="border border-[var(--teal)] text-[var(--teal)] rounded-full px-8 py-3 text-sm font-medium hover:bg-[var(--teal)] hover:text-white transition-all duration-200 inline-block"
            >
              View All Specialities
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
