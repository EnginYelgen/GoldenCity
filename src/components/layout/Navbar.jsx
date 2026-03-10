import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'

function NavLink({ to, label, isActive, onClick }) {
  const baseClasses =
    'px-3 py-2 text-sm font-medium transition-colors duration-200'
  const activeClasses = isActive
    ? 'text-primary-600 dark:text-primary-300'
    : 'text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-300'

  return (
    <Link to={to} className={`${baseClasses} ${activeClasses}`} onClick={onClick}>
      {label}
    </Link>
  )
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
}

NavLink.defaultProps = {
  isActive: false,
  onClick: undefined,
}

function ThemeToggleButton({ className }) {
  const { isDark, toggleTheme } = useTheme()

  const handleClick = useCallback(() => {
    toggleTheme()
  }, [toggleTheme])

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-full p-2 border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors duration-300 ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )
}

ThemeToggleButton.propTypes = {
  className: PropTypes.string,
}

ThemeToggleButton.defaultProps = {
  className: '',
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
  ]

  const handleToggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <nav className="bg-white dark:bg-secondary-900/80 backdrop-blur border-b border-secondary-100 dark:border-secondary-800 transition-colors duration-300 sticky top-0 z-30">
      <div className="container">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <Link to="/" className="flex items-center group">
              <svg
                width="30"
                height="35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                <circle cx="15" cy="20" r="10" stroke="#0682ff" />
                <circle cx="15" cy="20" r="6" stroke="#0682ff" strokeWidth="3" />
              </svg>
              <span className="ml-2 text-2xl font-bold text-primary-600 dark:text-primary-300 mt-1.5">
                GoldenCity
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                label={item.name}
                isActive={location.pathname === item.href}
              />
            ))}
            <ThemeToggleButton />
            <button type="button" className="btn">
              Connect
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center md:hidden space-x-3">
            <ThemeToggleButton />
            <button
              type="button"
              className="text-secondary-600 dark:text-secondary-200 hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200"
              onClick={handleToggleMenu}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-3">
            <div className="pt-2 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  label={item.name}
                  isActive={location.pathname === item.href}
                  onClick={handleCloseMenu}
                />
              ))}
              <button
                type="button"
                className="w-full mt-2 btn"
                onClick={handleCloseMenu}
              >
                Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar