import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/common/SectionHeader'
import FaqAccordion from '../components/common/FaqAccordion'

function FAQ() {
  const faqSections = [
    // mevcut faqSections içeriğini BURAYA aynen taşı
  ]

  return (
    <div className="min-h-screen bg-secondary-50 dark:bg-secondary-900 py-16 transition-colors duration-300">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our platform, cryptocurrency payments, and real estate investment."
          />

          <FaqAccordion sections={faqSections} />
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ