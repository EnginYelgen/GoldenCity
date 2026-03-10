import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

function FaqAccordion({ sections }) {
  const [openSections, setOpenSections] = useState({})

  const toggleSection = useCallback((sectionTitle, questionIndex) => {
    setOpenSections((prev) => ({
      ...prev,
      [`${sectionTitle}-${questionIndex}`]:
        !prev[`${sectionTitle}-${questionIndex}`],
    }))
  }, [])

  return (
    <div className="space-y-8">
      {sections.map((section, sectionIndex) => (
        <div
          key={section.title ?? sectionIndex}
          className="bg-white dark:bg-secondary-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300"
        >
          {section.title && (
            <h2 className="text-xl font-semibold p-6 bg-secondary-50 dark:bg-secondary-900/60 text-secondary-900 dark:text-white">
              {section.title}
            </h2>
          )}
          <div className="divide-y divide-secondary-100 dark:divide-secondary-700">
            {section.questions.map((item, questionIndex) => {
              const key = `${section.title}-${questionIndex}`
              const isOpen = Boolean(openSections[key])

              return (
                <div key={key} className="p-6">
                  <button
                    type="button"
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => toggleSection(section.title, questionIndex)}
                  >
                    <span className="font-medium text-secondary-900 dark:text-white">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <FiChevronUp className="flex-shrink-0 ml-4 text-secondary-500 dark:text-secondary-300" />
                    ) : (
                      <FiChevronDown className="flex-shrink-0 ml-4 text-secondary-500 dark:text-secondary-300" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-secondary-600 dark:text-secondary-300">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

FaqAccordion.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      questions: PropTypes.arrayOf(
        PropTypes.shape({
          question: PropTypes.string.isRequired,
          answer: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
}

export default React.memo(FaqAccordion)