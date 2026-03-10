import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiUser, FiClock, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import {
  FaWallet,
  FaStore,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaChartLine,
  FaLock,
  FaUserCog,
  FaCoins,
} from 'react-icons/fa'
import { SiEthereum } from 'react-icons/si'
import SectionHeader from '../components/common/SectionHeader'
import FaqAccordion from '../components/common/FaqAccordion'

const heroBackground =
  'https://images.unsplash.com/photo-1526481280695-3c687fd543c0?w=1600&q=80'

function Home() {
  const [openSections, setOpenSections] = useState({})

  const toggleSection = useCallback((sectionTitle, questionIndex) => {
    setOpenSections((prev) => ({
      ...prev,
      [`${sectionTitle}-${questionIndex}`]: !prev[`${sectionTitle}-${questionIndex}`],
    }))
  }, [])

  const featuredProperties = [
    {
      id: 1,
      title: 'Luxury Downtown Apartment',
      price: {
        usd: 850000,
        eth: 425,
      },
      location: 'Miami, FL',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      roi: '7.2% Annual',
      metrics: {
        totalInvestors: 142,
        funded: '89%',
        minInvestment: '$10',
      },
      status: 'Active Investment',
    },
    {
      id: 2,
      title: 'Modern Tech District Complex',
      price: {
        usd: 1200000,
        eth: 600,
      },
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      roi: '6.8% Annual',
      metrics: {
        totalInvestors: 203,
        funded: '95%',
        minInvestment: '$10',
      },
      status: 'Almost Funded',
    },
    {
      id: 3,
      title: 'Waterfront Commercial Space',
      price: {
        usd: 2100000,
        eth: 1050,
      },
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      roi: '7.5% Annual',
      metrics: {
        totalInvestors: 89,
        funded: '45%',
        minInvestment: '$10',
      },
      status: 'New Listing',
    },
  ]

  const advantages = [
    {
      icon: FaChartLine,
      title: 'Profitability',
      description:
        'Target average annual returns of 7% through strategic property investments and efficient management.',
    },
    {
      icon: FaExchangeAlt,
      title: 'Liquidity',
      description:
        'Trade your property NFTs anytime on our marketplace, providing unprecedented real estate liquidity.',
    },
    {
      icon: FaLock,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no entry, exit, or capital gains fees. What you see is what you get.',
    },
    {
      icon: FaUserCog,
      title: 'Hassle-Free Management',
      description:
        'GoldenCity handles all property management aspects, from maintenance to tenant relations.',
    },
  ]

  const investmentSteps = [
    {
      icon: FaWallet,
      title: 'Connect Wallet',
      description: 'Connect your cryptocurrency wallet to GoldenCity to start investing.',
    },
    {
      icon: FaStore,
      title: 'Choose Property',
      description: 'Browse our marketplace and select properties that match your investment goals.',
    },
    {
      icon: FaMoneyBillWave,
      title: 'Receive Returns',
      description: 'Collect monthly rental returns directly to your connected wallet.',
    },
    {
      icon: FaExchangeAlt,
      title: 'Flexible Exit',
      description: 'Sell your property NFTs whenever you want through our marketplace.',
    },
  ]

  const howItWorks = [
    {
      icon: FaCoins,
      title: 'Tokenization',
      description:
        'Properties are divided into $10 NFT tokens, making real estate investment accessible to everyone.',
    },
    {
      icon: SiEthereum,
      title: 'Purchase NFTs',
      description:
        'Buy property NFTs using cryptocurrency, becoming a fractional owner of the property.',
    },
    {
      icon: FaMoneyBillWave,
      title: 'Monthly Returns',
      description:
        'Receive your share of rental income directly to your wallet each month.',
    },
    {
      icon: FaExchangeAlt,
      title: 'Flexible Trading',
      description:
        'Hold for passive income or sell your NFTs on our marketplace at any time.',
    },
  ]

  const categories = [
    { id: 'crypto', name: 'Cryptocurrency' },
    { id: 'investment', name: 'Investment' },
    { id: 'property', name: 'Property' },
    { id: 'technology', name: 'Technology' },
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Real Estate: Cryptocurrency Payments and Blockchain Technology',
      slug: 'future-real-estate-crypto-payments',
      excerpt:
        'Explore how cryptocurrency and blockchain are revolutionizing property transactions and investment opportunities.',
      image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?w=800&q=80',
      category: 'crypto',
      author: 'Sarah Johnson',
      date: '2024-03-15',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Understanding Tokenized Real Estate Investment',
      slug: 'understanding-tokenized-real-estate',
      excerpt:
        "A comprehensive guide to property tokenization and how it's making real estate investment more accessible.",
      image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&q=80',
      category: 'investment',
      author: 'Michael Chen',
      date: '2024-03-12',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Smart Contracts in Real Estate Transactions',
      slug: 'smart-contracts-real-estate',
      excerpt:
        'How smart contracts are streamlining property transactions and reducing costs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      category: 'technology',
      author: 'David Rodriguez',
      date: '2024-03-10',
      readTime: '6 min read',
    },
  ]

  const faqSections = [
    {
      title: 'General Information',
      questions: [
        {
          question: 'What is GoldenCity?',
          answer:
            'GoldenCity is an innovative investment project dedicated to real estate. We allow clients to invest as little as $10 in investment properties, with the aim of building up regular income and/or savings.',
        },
        {
          question: 'I want to buy NFTs, what payment methods are accepted?',
          answer:
            'You can use various payment methods such as Metamask, Phantom wallet, OKX wallet, Trust wallet, etc.',
        },
        {
          question: 'What is the marketplace, or secondary market?',
          answer:
            'The GoldenCity Marketplace is our platform that allows GoldenCity community members to buy and sell NFTs among themselves. It is the equivalent of a secondary market where investors can buy and sell NFTs among themselves.',
        },
        {
          question:
            'I sell or buy NFTs during the month. Who receives the rental income for the current month?',
          answer:
            'The rental income is paid to the investor who owns the NFTs on the day the royalties are paid.',
        },
        {
          question: 'Are transactions on the platform secure?',
          answer:
            'GoldenCity uses the most advanced technical means to ensure the confidentiality and security of transactions on the platform.',
        },
      ],
    },
  ]

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt="Modern city skyline"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 via-secondary-900/70 to-secondary-900/90 dark:from-black/70 dark:via-secondary-900/80 dark:to-black/90" />
        </div>

        <div className="relative container py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-white"
          >
            <p className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
              Live: New properties listed weekly
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Invest in tokenized
              <span className="block text-primary-300">real estate with crypto.</span>
            </h1>
            <p className="text-lg text-secondary-200 max-w-xl">
              Build a diversified real estate portfolio with as little as $10 per property.
              Own fractional shares, earn rental income, and trade your positions anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/properties" className="btn bg-primary-500 hover:bg-primary-400">
                Start Investing
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="btn-secondary bg-white/10 text-white border border-white/30 hover:bg-white/20"
              >
                Learn How It Works
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-secondary-200 pt-4">
              <div>
                <p className="font-semibold text-white">7%–10% target annual yield</p>
                <p>Based on historical property performance</p>
              </div>
              <div>
                <p className="font-semibold text-white">Instant diversification</p>
                <p>Invest across cities and asset types</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <motion.div
              className="card bg-white/95 dark:bg-secondary-900/90 border border-white/20 dark:border-secondary-700 shadow-2xl backdrop-blur"
              initial={{ y: 16 }}
              animate={{
                y: [16, 8, 16],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-secondary-500 dark:text-secondary-300">
                    Portfolio Snapshot
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    Simulated
                  </span>
                </div>
                <div>
                  <p className="text-sm text-secondary-500 dark:text-secondary-300 mb-1">
                    Total invested
                  </p>
                  <p className="text-2xl font-bold text-secondary-900 dark:text-white">
                    $42,560
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-secondary-500 dark:text-secondary-300">Properties</p>
                    <p className="font-semibold">12</p>
                  </div>
                  <div>
                    <p className="text-secondary-500 dark:text-secondary-300">Avg. ROI</p>
                    <p className="font-semibold text-emerald-500">7.8%</p>
                  </div>
                  <div>
                    <p className="text-secondary-500 dark:text-secondary-300">Monthly yield</p>
                    <p className="font-semibold">$278</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-6 w-40 h-40 bg-primary-500/30 dark:bg-primary-500/20 rounded-3xl blur-3xl"
              animate={{ opacity: [0.4, 0.7, 0.4], y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -top-6 -right-10 w-32 h-32 bg-emerald-400/30 dark:bg-emerald-400/20 rounded-full blur-3xl"
              animate={{ opacity: [0.5, 0.8, 0.5], y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Investment Steps */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-secondary-900 dark:text-white">
            Start Investing in Minutes
          </h2>
          <p className="text-secondary-600 dark:text-secondary-300">
            Your journey to crypto-powered real estate investment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {investmentSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="card text-center p-6">
                <div className="bg-primary-50 dark:bg-primary-900/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-2xl text-primary-600 dark:text-primary-300" />
                </div>
                <div className="text-primary-600 dark:text-primary-300 text-2xl font-bold mb-4">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary-900 text-white py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How GoldenCity Works</h2>
            <p className="text-secondary-300">
              Understanding our tokenized real estate platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-secondary-800 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
                <p className="text-secondary-300 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-secondary-900 dark:text-white">
            Featured Investment Opportunities
          </h2>
          <p className="text-secondary-600 dark:text-secondary-300">
            Curated properties with verified returns and immediate tokenization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-secondary-900/90 px-3 py-1 rounded-full text-primary-600 dark:text-primary-300 font-semibold shadow">
                  {property.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">
                  {property.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                  {property.location}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-secondary-500 dark:text-secondary-400">Price</p>
                    <p className="font-semibold text-secondary-900 dark:text-white">
                      ${property.price.usd.toLocaleString()}
                    </p>
                    <p className="text-sm text-primary-600 dark:text-primary-300">
                      {property.price.eth} ETH
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-secondary-500 dark:text-secondary-400">ROI</p>
                    <p className="font-semibold text-emerald-500">{property.roi}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-600 dark:text-secondary-300">
                      Total Investors
                    </span>
                    <span className="font-medium text-secondary-900 dark:text-white">
                      {property.metrics.totalInvestors}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600 dark:text-secondary-300">Funded</span>
                    <span className="font-medium text-secondary-900 dark:text-white">
                      {property.metrics.funded}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600 dark:text-secondary-300">
                      Min Investment
                    </span>
                    <span className="font-medium text-secondary-900 dark:text-white">
                      {property.metrics.minInvestment}
                    </span>
                  </div>
                </div>

                <Link to={`/properties/${property.id}`} className="btn w-full">
                  Invest Now
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary-50 dark:bg-secondary-950 pt-16 pb-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary-900">
              Why Choose GoldenCity
            </h2>
            <p className="text-secondary-600">
              Experience the future of real estate investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <advantage.icon className="text-4xl text-primary-600 dark:text-primary-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">
                  {advantage.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="rounded-2xl p-8 md:p-12 text-white text-center bg-gradient-to-r from-primary-600 to-primary-500 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of investors already earning passive income through tokenized real
            estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="btn bg-white text-primary-600 hover:bg-primary-50"
            >
              Browse Properties
            </Link>
            <button type="button" className="btn bg-primary-700 hover:bg-primary-800">
              <FaWallet className="mr-2" />
              Connect Wallet
            </button>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="container bg-white dark:bg-secondary-900 rounded-3xl py-24 shadow-lg shadow-secondary-900/5 dark:shadow-black/40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-secondary-900 dark:text-white">
            Latest Insights
          </h2>
          <p className="text-secondary-600 dark:text-secondary-300">
            Stay informed with our latest articles and market analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card overflow-hidden"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-secondary-900/90 px-3 py-1 rounded-full text-sm font-medium text-primary-600 dark:text-primary-300 shadow">
                    {categories.find((c) => c.id === post.category)?.name}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-secondary-500 dark:text-secondary-400">
                    <FiUser className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <FiClock className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our platform, cryptocurrency payments, and real estate investment."
          />
          <FaqAccordion sections={faqSections} />
        </motion.div>
      </section>

      {/* Discord CTA */}
      <section className="py-12 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Join Our Community
              </h2>
              <p className="mt-4 text-lg text-primary-100">
                Connect with other crypto real estate investors, share insights, and get early
                access to new properties.
              </p>
              <dl className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-700 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-white">
                      10,000+ Members
                    </dt>
                    <dd className="mt-2 text-base text-primary-100">
                      Join a growing community of crypto-savvy real estate investors
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-700 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-white">
                      Weekly Events
                    </dt>
                    <dd className="mt-2 text-base text-primary-100">
                      Educational webinars, market updates, and networking sessions
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-12 lg:mt-0 flex justify-center">
              <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                  Join Discord
                </h3>
                <p className="text-gray-500 text-center mb-8">
                  Get instant access to our community and start connecting with other investors
                </p>
                <a
                  href="https://discord.gg/GoldenCity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                >
                  Join Now
                </a>
                <p className="mt-4 text-sm text-gray-500 text-center">
                  Already a member?{' '}
                  <a
                    href="https://discord.gg/GoldenCity"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Home.propTypes = {}

export default Home