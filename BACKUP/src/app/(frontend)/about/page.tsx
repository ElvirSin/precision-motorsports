import React from 'react'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import '../styles.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      <Navigation activePage="about" />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-logo">
            <Image
              src="/about-us/long-logo.png"
              alt="Precision Motorsports"
              width={600}
              height={180}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image-column">
            <div className="about-image">
              <Image
                src="/about-us/image-1.webp"
                alt="Precision Motorsports Garage"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="about-text-column">
            <h2 className="about-section-title">WHO WE ARE</h2>
            <div className="about-content">
              <p>
                At Precision Motorsports, we get it—your car isn't just transportation. It's
                passion, performance, and personality, all in one. That's why we're here to redefine
                what you expect from an automotive shop. We believe every vehicle deserves an
                unmatched level of care, precision, and attention to detail—because it's not just
                about fixing cars, it's about perfecting them.
              </p>
              <p>
                We started this journey in 2016 with one simple goal: to provide the highest-quality
                service and premium parts for European and exotic vehicles. What began as a love for
                building engines and tuning European performance cars has grown into a full-scale
                performance shop in Farmington Hills, Michigan. Our team isn't just made up of
                technicians—we're enthusiasts first, with hands-on experience and technical training
                in brands like Audi, BMW, and Mercedes-Benz.
              </p>
              <p>
                Whether you're here for routine service, performance upgrades, or a full custom
                build, we've got you covered. With over 250 premium aftermarket brands, we're ready
                to help you create the car you've always dreamed of—whether that means aggressive
                styling, performance tuning, or even a complete engine rebuild. No project is too
                big or too bold.
              </p>
              <p>
                From BMW to Porsche to McLaren, we treat every car like it's our own. So if you're
                looking for a shop that understands the heart of a car enthusiast, welcome to
                Precision Motorsports. Let's build something incredible together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="about-section about-section-alt">
        <div className="about-container">
          <div className="about-text-column">
            <h2 className="about-section-title">OUR MISSION</h2>
            <div className="about-content">
              <p>
                At Precision Motorsports, our mission is to provide unparalleled automotive services
                that exceed expectations. We aim to create an exclusive haven for automotive
                enthusiasts, offering comprehensive solutions under one roof while fostering a
                community built on trust, excellence, and passion for fine automobiles.
              </p>
            </div>
          </div>
          <div className="about-image-column">
            <div className="about-image">
              <Image
                src="/about-us/image-2.webp"
                alt="Precision Motorsports Service"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image-column">
            <div className="about-image">
              <Image
                src="/about-us/image-3.webp"
                alt="Precision Motorsports Expertise"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="about-text-column">
            <h2 className="about-section-title">OUR EXPERTISE</h2>
            <div className="about-content">
              <p>
                Our team of master-certified technicians brings unparalleled expertise to every
                vehicle we service. We utilize OEM scan tools for all makes, including BMW, Audi,
                Porsche, Volkswagen, and even exclusive marques like McLaren and Lamborghini,
                ensuring precise diagnostics and factory-level performance.
              </p>
              <p>
                Our reputation for excellence extends beyond Michigan, with clients entrusting us to
                service and enhance their vehicles from across state lines.
              </p>
              <p>
                We take pride in supporting the automotive community, sponsoring major events like
                MPACT in Pennsylvania and contributing to local gatherings such as the Detroit Auto
                Show, track days, car meets, and the Porsche Club of America – Southeast Michigan
                Region.
              </p>
              <p>
                Our commitment to quality is further reflected in our collaborations with
                industry-leading brands like Akrapovic, Vossen Wheels, Stage 4 Tuning, 7 Design,
                AirLift Performance, Novitec, Bimmertech, and more. At Precision Motorsports, we
                don't just service vehicles—we elevate them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
