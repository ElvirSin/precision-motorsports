'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  serviceType: string
  serviceTitle: string
  serviceDescription: string
  carImage: string
  carAlt: string
  serviceExamples: string[]
}

export default function ServiceModal({
  isOpen,
  onClose,
  serviceType,
  serviceTitle,
  serviceDescription,
  carImage,
  carAlt,
  serviceExamples,
}: ServiceModalProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    // Reset expanded card when modal closes
    if (!isOpen) {
      setExpandedCard(null)
    }
  }, [isOpen])

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  if (!isOpen) return null

  return (
    <div className="service-modal-overlay" onClick={onClose}>
      <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="service-modal-close-wrapper">
          <button className="service-modal-close" onClick={onClose} aria-label="Close">
            <FaTimes />
          </button>
        </div>

        <div className="service-modal-top">
          <div className="service-modal-intro">
            <div className="service-modal-category">{serviceType}</div>
            <h2 className="service-modal-title">{serviceTitle}</h2>
            <p className="service-modal-description">{serviceDescription}</p>
            <Link href="/book-now">
              <button className="service-modal-inquire-button">
                INQUIRE NOW
                <span className="button-arrow">→</span>
              </button>
            </Link>
          </div>
          <div className="service-modal-image">
            <Image
              src={carImage}
              alt={carAlt}
              width={600}
              height={400}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        <div className="service-modal-divider"></div>

        <div className="service-modal-bottom">
          <h3 className="service-modal-options-title">INQUIRE FOR SERVICES</h3>
          <div className="service-modal-examples-grid">
            {serviceExamples.map((example, index) => (
              <div key={index} className="service-modal-example-wrapper">
                <div
                  className={`service-modal-example-card ${
                    expandedCard === index ? 'is-expanded' : ''
                  }`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="service-modal-example-text">{example}</div>
                  {expandedCard === index && (
                    <div className="service-modal-expanded-button-container">
                      <Link href="/book-now" onClick={(e) => e.stopPropagation()}>
                        <button className="service-modal-expanded-inquire-button">
                          INQUIRE NOW
                          <span className="button-arrow">→</span>
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
