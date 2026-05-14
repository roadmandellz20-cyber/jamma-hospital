'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const TRUST_ITEMS = [
  'Specialist-Led Care',
  'Sub-Regional Training Hub',
  'Health Tourism Ready',
] as const

function TealDot() {
  return <span className="block w-2 h-2 rounded-full bg-[var(--teal)]" />
}

export default function Home() {
  return (
    <section className="min-h-screen bg-[var(--navy)] flex items-center">
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-display">
              <span className="block text-white">Specialist Care,</span>
              <span className="block text-white">Right Here</span>
              <span className="block" style={{ color: 'var(--teal)' }}>at Home.</span>
            </h1>

            <p className="text-white/60 text-base md:text-lg mt-6 max-w-md font-body">
              Neurology. Neurosurgery. Orthopaedics. Paediatric Surgery.{' '}
              World-class specialist-led care — without leaving The Gambia.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <button className="bg-[var(--teal)] text-white rounded-full px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity">
                Book an Appointment
              </button>
              <button className="border border-white/30 text-white rounded-full px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors">
                Our Specialities →
              </button>
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

            {/* Card 1 — top-left, overlaps left edge on desktop */}
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

            {/* Card 2 — bottom-right, overlaps right edge on desktop */}
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
                <span
                  className="text-xs rounded-full px-3 py-1 inline-block"
                  style={{
                    background: 'color-mix(in srgb, var(--teal) 20%, transparent)',
                    color: 'var(--teal)',
                  }}
                >
                  Health Tourism Ready
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
