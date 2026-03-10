import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiTrendingUp, FiDollarSign } from 'react-icons/fi'
import { FaEthereum } from 'react-icons/fa'

function PropertyCard({ property }) {
  const {
    id,
    title,
    price,
    location,
    image,
    roi,
    metrics,
    status,
    tokenDetails,
  } = property

  return (
    <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
      <Link to={`/properties/${id}`}>
        <div className="relative h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {status && (
            <div className="absolute top-4 right-4 bg-white dark:bg-secondary-900 px-3 py-1 rounded-full text-primary-600 dark:text-primary-300 font-semibold shadow">
              {status}
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">
            {title}
          </h3>
          <p className="text-secondary-600 dark:text-secondary-300 mb-4">
            {location}
          </p>

          {/* Price and ROI */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-secondary-500 dark:text-secondary-400">
                Investment Price
              </p>
              <div className="flex items-center">
                <FiDollarSign className="text-primary-600" />
                <span className="font-semibold text-secondary-900 dark:text-white">
                  ${price.usd.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center text-sm text-primary-600 dark:text-primary-300">
                <FaEthereum className="mr-1" />
                <span>{price.eth} ETH</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-secondary-500 dark:text-secondary-400">
                Annual ROI
              </p>
              <div className="flex items-center justify-end text-green-600">
                <FiTrendingUp className="mr-1" />
                <span className="font-semibold">{roi}</span>
              </div>
            </div>
          </div>

          {/* Investment Metrics */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-secondary-600 dark:text-secondary-300">
                Monthly Income
              </span>
              <span className="font-medium text-secondary-900 dark:text-white">
                {metrics.monthlyIncome}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-secondary-600 dark:text-secondary-300">
                Appreciation
              </span>
              <span className="font-medium text-secondary-900 dark:text-white">
                {metrics.appreciation}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-secondary-600 dark:text-secondary-300">
                Min Investment
              </span>
              <span className="font-medium text-secondary-900 dark:text-white">
                {metrics.minInvestment}
              </span>
            </div>
          </div>

          {/* Funding Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-secondary-600 dark:text-secondary-300">
                Funding Progress
              </span>
              <span className="font-medium text-secondary-900 dark:text-white">
                {metrics.funded}
              </span>
            </div>
            <div className="w-full bg-secondary-100 dark:bg-secondary-700 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full"
                style={{ width: metrics.funded }}
              />
            </div>
          </div>

          {/* Token Details */}
          {tokenDetails && (
            <div className="bg-secondary-50 dark:bg-secondary-900/60 rounded-lg p-3 mb-4 transition-colors duration-300">
              <div className="flex justify-between text-sm">
                <span className="text-secondary-600 dark:text-secondary-300">
                  Available Tokens
                </span>
                <span className="font-medium text-secondary-900 dark:text-white">
                  {tokenDetails.availableTokens.toLocaleString()} /{' '}
                  {tokenDetails.totalTokens.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-secondary-600 dark:text-secondary-300">
                  Token Price
                </span>
                <span className="font-medium text-secondary-900 dark:text-white">
                  {tokenDetails.tokenPrice}
                </span>
              </div>
            </div>
          )}

          <button
            type="button"
            className="btn w-full flex items-center justify-center"
          >
            Invest Now
            <FiArrowRight className="ml-2" />
          </button>
        </div>
      </Link>
    </div>
  )
}

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.shape({
      usd: PropTypes.number.isRequired,
      eth: PropTypes.number.isRequired,
    }).isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    roi: PropTypes.string.isRequired,
    metrics: PropTypes.shape({
      totalInvestors: PropTypes.number,
      funded: PropTypes.string.isRequired,
      minInvestment: PropTypes.string.isRequired,
      monthlyIncome: PropTypes.string,
      appreciation: PropTypes.string,
    }).isRequired,
    status: PropTypes.string,
    tokenDetails: PropTypes.shape({
      totalTokens: PropTypes.number.isRequired,
      availableTokens: PropTypes.number.isRequired,
      tokenPrice: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default React.memo(PropertyCard)

