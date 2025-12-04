import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next'
import ScrollArrow from '../components/ScrollArrow'
import '../styles.css'

export const metadata: Metadata = {
  title: 'About Us | BMW, Audi, Porsche & Exotic Car Experts',
  description:
    'Learn about the experts at Precision Motorsports—specializing in European, exotic, and performance car service. Trust our master technicians. Visit us today!',
  keywords:
    'Learn about Precision Motorsports; expert technicians specializing in BMW, Audi, Porsche, and exotic car service, performance upgrades, and custom builds in Oakland County, MI. Trusted for premium care and precision engineering.',
}

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-new">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content-new">
          <div className="about-logo-new">
            <Image
              src="/about-us/long-logo.png"
              alt="Precision Motorsports"
              width={700}
              height={210}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div className="about-hero-subtitle">
            <span className="hero-accent-line"></span>
            <p>EXCELLENCE IN EVERY DETAIL</p>
            <span className="hero-accent-line"></span>
          </div>
          <div className="about-hero-scroll-arrow-wrapper">
            <ScrollArrow />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="about-stats-container">
          <div className="about-stat-card">
            <div className="about-stat-number">2016</div>
            <div className="about-stat-label">Founded</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-number">250+</div>
            <div className="about-stat-label">Premium Brands</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-number">Master</div>
            <div className="about-stat-label">Certified Team</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-number">100%</div>
            <div className="about-stat-label">Passion Driven</div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-section-new">
        <div className="about-container-new">
          <div className="about-section-header">
            <span className="about-section-number">01</span>
            <h2 className="about-section-title-new">WHO WE ARE</h2>
            <div className="about-title-underline"></div>
          </div>

          <div className="about-content-grid">
            <div className="about-image-wrapper-new">
              <div className="about-image-new">
                <div className="about-image-overlay"></div>
                <Image
                  src="/about-us/image-1.webp"
                  alt="Precision Motorsports Garage"
                  width={800}
                  height={600}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="about-text-wrapper-new">
              <div className="about-text-card">
                <p className="about-intro-text">
                  At Precision Motorsports, we get it—your car isn't just transportation. It's
                  passion, performance, and personality, all in one. That's why we're here to
                  redefine what you expect from an automotive shop. We believe every vehicle
                  deserves an unmatched level of care, precision, and attention to detail—because
                  it's not just about fixing cars, it's about perfecting them.
                </p>
              </div>

              <div className="about-text-card">
                <p>
                  We started this journey in 2016 with one simple goal: to provide the
                  highest-quality service and premium parts for European and exotic vehicles. What
                  began as a love for building engines and tuning European performance cars has
                  grown into a full-scale performance shop in Farmington Hills, Michigan. Our team
                  isn't just made up of technicians—we're enthusiasts first, with hands-on
                  experience and technical training in brands like Audi, BMW, and Mercedes-Benz.
                </p>
              </div>

              <div className="about-text-card">
                <p>
                  Whether you're here for routine service, performance upgrades, or a full custom
                  build, we've got you covered. With over 250 premium aftermarket brands, we're
                  ready to help you create the car you've always dreamed of—whether that means
                  aggressive styling, performance tuning, or even a complete engine rebuild. No
                  project is too big or too bold.
                </p>
              </div>

              <div className="about-text-card">
                <p>
                  From BMW to Porsche to McLaren, we treat every car like it's our own. So if you're
                  looking for a shop that understands the heart of a car enthusiast, welcome to
                  Precision Motorsports. Let's build something incredible together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="about-section-new about-section-mission">
        <div className="about-container-new">
          <div className="about-section-header about-section-header-right">
            <span className="about-section-number">02</span>
            <h2 className="about-section-title-new">OUR MISSION</h2>
            <div className="about-title-underline"></div>
          </div>

          <div className="about-content-grid">
            <div className="about-text-wrapper-new">
              <div className="about-text-card">
                <p className="about-intro-text">
                  At Precision Motorsports, our mission is to provide unparalleled automotive
                  services that exceed expectations. We aim to create an exclusive haven for
                  automotive enthusiasts, offering comprehensive solutions under one roof while
                  fostering a community built on trust, excellence, and passion for fine
                  automobiles.
                </p>
              </div>

              <div className="about-text-card">
                <p>
                  We believe that every vehicle deserves the highest level of craftsmanship and
                  attention to detail. Our commitment extends beyond mere repairs—we're dedicated to
                  enhancing your driving experience, whether through precision maintenance,
                  performance upgrades, or complete custom builds. Every project we undertake is
                  approached with the same level of passion and expertise that we would apply to our
                  own vehicles.
                </p>
              </div>

              <div className="about-text-card">
                <p>
                  Our mission is built on three core pillars: uncompromising quality, genuine
                  expertise, and authentic passion. We don't just work on cars—we understand them,
                  we respect them, and we elevate them. From the moment you walk through our doors,
                  you become part of a community that values excellence, innovation, and the pursuit
                  of automotive perfection.
                </p>
              </div>

              <div className="about-text-card">
                <p>
                  We're committed to staying at the forefront of automotive technology and
                  techniques, continuously investing in training, equipment, and partnerships with
                  industry-leading brands. Our mission is to be more than a service provider—we're
                  your trusted partner in achieving automotive excellence, one vehicle at a time.
                </p>
              </div>
            </div>

            <div className="about-image-wrapper-new">
              <div className="about-image-new">
                <div className="about-image-overlay"></div>
                <Image
                  src="/about-us/image-2.webp"
                  alt="Precision Motorsports Service"
                  width={800}
                  height={600}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="about-section-new">
        <div className="about-container-new">
          <div className="about-section-header">
            <span className="about-section-number">03</span>
            <h2 className="about-section-title-new">OUR EXPERTISE</h2>
            <div className="about-title-underline"></div>
          </div>

          <div className="about-content-grid about-content-grid-reverse">
            <div className="about-image-wrapper-new">
              <div className="about-image-new">
                <div className="about-image-overlay"></div>
                <Image
                  src="/about-us/image-3.webp"
                  alt="Precision Motorsports Expertise"
                  width={800}
                  height={600}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="about-text-wrapper-new">
              <div className="about-text-card">
                <p>
                  Our team of master-certified technicians brings unparalleled expertise to every
                  vehicle we service. We utilize OEM scan tools for all makes, including BMW, Audi,
                  Porsche, Volkswagen, and even exclusive marques like McLaren and Lamborghini,
                  ensuring precise diagnostics and factory-level performance.
                </p>
              </div>

              <div className="about-text-card">
                <p>
                  Our reputation for excellence extends beyond Michigan, with clients entrusting us
                  to service and enhance their vehicles from across state lines.
                </p>
              </div>

              <div className="about-text-card">
                <p>
                  We take pride in supporting the automotive community, sponsoring major events like
                  MPACT in Pennsylvania and contributing to local gatherings such as the Detroit
                  Auto Show, track days, car meets, and the Porsche Club of America – Southeast
                  Michigan Region.
                </p>
              </div>

              <div className="about-text-card">
                <p>
                  Our commitment to quality is further reflected in our collaborations with
                  industry-leading brands like Akrapovic, Vossen Wheels, Stage 4 Tuning, 7 Design,
                  AirLift Performance, Novitec, Bimmertech, and more. At Precision Motorsports, we
                  don't just service vehicles—we elevate them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-cta-content">
          <h3 className="about-cta-title">READY TO ELEVATE YOUR VEHICLE?</h3>
          <p className="about-cta-text">Experience the Precision Motorsports difference</p>
        </div>
      </section>
    </div>
  )
}
