import React from 'react'
import PropTypes from 'prop-types'

function SectionHeader({ title, subtitle, align, className }) {
  const alignClasses =
    align === 'left'
      ? 'text-left'
      : align === 'right'
      ? 'text-right'
      : 'text-center'

  return (
    <div className={`mb-12 ${alignClasses} ${className}`}>
      <h2 className="text-3xl font-bold mb-4 text-secondary-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-secondary-600 dark:text-secondary-300">
          {subtitle}
        </p>
      )}
    </div>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
}

SectionHeader.defaultProps = {
  subtitle: '',
  align: 'center',
  className: '',
}

export default React.memo(SectionHeader)