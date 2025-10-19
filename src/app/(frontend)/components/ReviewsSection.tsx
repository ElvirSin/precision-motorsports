'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface Review {
  id: number
  author: string
  date: string
  text: string
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'Craig Lorraine',
    date: '2024-08-09',
    text: 'Many thanks to Dennis and the crew at Precision Motorsports for taking my perfectly good RSQ8 and turning it into a monster that my neighbors all hate. Fantastic service, fair price and for the bonus round they delivered the car back to the driveway. Even the bears in Gatlinburg were impressed!',
  },
  {
    id: 2,
    author: 'David Eaton',
    date: '2024-08-04',
    text: 'Brought my 2014 Audi S5 in for engine repair and an oil leak. The technicians did an amazing job in handling my issue. I recommend anyone who owns a German vehicle to trust the mechanics at Precision Motorsports.',
  },
  {
    id: 3,
    author: 'Aishwary Gupta',
    date: '2024-08-01',
    text: 'Jamie was very helpful and prompt in answering questions I had about the work that would be done to fix my car. An excellent, transparent online quoting system was a major plus! You can easily tell this shop has a deep passion for properly maintaining high performance vehicles to give you those endless miles of smiles.',
  },
  {
    id: 4,
    author: 'Steve Ahonen',
    date: '2024-08-01',
    text: 'Brought my 3 Series BMW in for an oil pan leak and a bad intake manifold gasket. Dennis not only showed me what was going on, but did a perfect repair at a fraction of the cost of the dealer using all OEM parts. He also rebuilt the front end of this vehicle because of the Michigan roads. Quick work, excellent repair, and nearly half the price of the dealership. I will never take my cars to anyone else.',
  },
  {
    id: 5,
    author: 'Alex Salmo',
    date: '2024-06-27',
    text: "The only shop that could fix my problem with my F90 m5 suspension, shoutout to Dennis for making the process as quick and easy as possible! Wouldn't trust anyone else to work on my performance cars after seeing them in action!!!!",
  },
  {
    id: 6,
    author: 'gamingar gamingar',
    date: '2024-10-30',
    text: "I went to precision because I had a problem with my transmission that the Audi dealership themselves said they couldn't even figure out how to fix, after having it for months and telling me they couldn't see a problem, yet it was a dangerous issue that was quickly getting worse. I took it to precision and they immediately documented the issue and began fixing it. They were very responsive and professional throughout the whole process and I recommend anyone with a car they care about go to them.",
  },
  {
    id: 7,
    author: 'danny ansara',
    date: '2024-10-22',
    text: 'Dennis and his team took great care of my 2003 CL600. There was a problem with the ABC system , which they were able to quickly diagnose, after which they ordered my parts and had the repairs done in 2 days. Dennis also informed me of a couple other issues that need attention, which I appreciate. I am very satisfied with the service and I will be using them for future work.',
  },
  {
    id: 8,
    author: 'MICHAEL KASSAB',
    date: '2024-08-22',
    text: 'Such an amazing experience! Great customer service & quality!',
  },
  {
    id: 9,
    author: 'Alexander Saffell',
    date: '2024-08-13',
    text: 'More than pleased with the work done at Precision Motorsports! Everyone was so friendly and genuinely enjoyable to work with. I will be choosing them again when I need to work on my Tesla!',
  },
]

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set())

  // Update items per view based on screen size
  React.useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, reviews.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerView)

  const toggleReviewExpansion = (reviewId: number) => {
    setExpandedReviews((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId)
      } else {
        newSet.add(reviewId)
      }
      return newSet
    })
  }

  const isReviewExpanded = (reviewId: number) => {
    return expandedReviews.has(reviewId)
  }

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">CUSTOMER REVIEWS</h2>
          <p className="reviews-subtitle">Where every review tells our story.</p>
        </div>

        <div className="reviews-carousel">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Previous reviews"
          >
            ‹
          </button>

          <div className="reviews-grid">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className={`review-card ${isReviewExpanded(review.id) ? 'expanded' : ''}`}
                onClick={() => toggleReviewExpansion(review.id)}
              >
                <div className="review-header">
                  <div className="review-author-info">
                    <h3 className="review-author">{review.author}</h3>
                    <p className="review-date">{review.date}</p>
                  </div>
                  <div className="google-icon">
                    <Image src="/misc/google-icon.svg" alt="Google" width={20} height={20} />
                  </div>
                </div>

                <div className="review-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            aria-label="Next reviews"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
