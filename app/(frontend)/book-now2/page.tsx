'use client'
import { useState } from 'react'
import '../styles.css'

export default function BookNow2Page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleVin: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    urgency: '',
    description: '',
    budget: '',
    additionalInfo: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      console.log('Starting API test...')

      // First try direct API call (might fail due to CORS)
      try {
        console.log('Attempting direct API call...')
        const directResponse = await fetch('https://app.shopmonkey.cloud/api/v3/work_request', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'x-app-request-id': '3f795b1e-545f-4e97-845f-ed213400812b',
            'x-app-version': '144 (3aa8ed1)',
            'x-request-location':
              '/public/quote-request/5f7f3d5ceb5e250aaf9df14f?noExternalScripts=1',
          },
          body: JSON.stringify({
            attachments: [],
            customerDetails: {
              address1: '20 Broad Street',
              address2: '',
              city: 'New York',
              country: 'US',
              firstName: 'COMING FROM',
              lastName: 'API',
              email: 'elvir.sinancevic@hotmail.de',
              phone: '+17305754789',
              postalCode: '10005',
              state: 'NY',
            },
            description: 'please ignore',
            locationId: '5f7f3d5ceb5e250aaf9df14f',
            marketingSmsOptIn: false,
            referralSourceId: '',
            smsOptIn: true,
            vehicleDetails: {
              baseId: 143239,
              drivetrain: 'AWD',
              drivetypeId: 6,
              engine: '1.8L i-VTEC L4 (R18Z9) GAS FI',
              engineId: 21029,
              licensePlate: 'coolcar',
              licensePlateState: 'CA',
              make: 'Honda',
              makeId: 59,
              model: 'HR-V',
              modelId: 25022,
              region: 'US',
              size: 'LightDuty',
              submodel: 'EX',
              submodelId: 191,
              transmission: null,
              type: 'SUV',
              vcdbId: 246141,
              vcdbVehicleId: '7dc6d20491262119',
              vin: '3CZRU6H52JG729090',
              year: 2018,
              multipleTransmissionOptions: true,
            },
          }),
        })

        console.log('Direct API call successful!')
        console.log('Status:', directResponse.status)
        console.log('Headers:', Object.fromEntries(directResponse.headers.entries()))

        const directData = await directResponse.text()
        console.log('Response:', directData)

        setSubmitStatus('success')
        return
      } catch (directError) {
        console.log('Direct API call failed (likely CORS):', directError)
        console.log('Falling back to server-side API route...')
      }

      // Fallback: Use server-side API route with form data
      const serverResponse = await fetch('/api/test-shopmonkey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const serverData = await serverResponse.json()
      console.log('Server-side API response:', serverData)

      if (serverData.success) {
        setSubmitStatus('success')
        console.log('✅ Server-side API call successful!')
        console.log('Method used:', serverData.method)
        console.log('Request ID:', serverData.requestId)
        console.log('Response data:', serverData.data)
      } else {
        setSubmitStatus('error')
        console.log('❌ Server-side API call failed:', serverData.message || serverData.error)
        console.log('All attempts:', serverData.attempts)
      }
    } catch (error) {
      console.error('All API attempts failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const serviceTypes = [
    'General Maintenance',
    'Performance Tuning',
    'Engine Repair',
    'Transmission Service',
    'Brake Service',
    'Suspension Work',
    'Exhaust System',
    'Electrical Issues',
    'Body Work',
    'Paint & Detailing',
    'Custom Modifications',
    'Diagnostic Service',
    'Other',
  ]

  const urgencyLevels = [
    'Routine - No Rush',
    'Standard - Within 1-2 weeks',
    'Priority - Within 3-5 days',
    'Urgent - ASAP',
  ]

  const budgetRanges = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    'Over $10,000',
    'Not sure / Need estimate',
  ]

  return (
    <div className="homepage">

      {/* Main Content */}
      <section className="book-now-section">
        <div className="book-now-container">
          <div className="book-now-header">
            <h1 className="book-now-title">Custom Service Inquiry</h1>
            <p className="book-now-description">
              Tell us about your vehicle and service needs. We'll provide a detailed quote and
              schedule your appointment.
            </p>
          </div>

          <div className="custom-form-container">
            <form className="custom-inquiry-form" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="form-section">
                <h3 className="form-section-title">Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="form-section">
                <h3 className="form-section-title">Vehicle Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="vehicleYear" className="form-label">
                      Year *
                    </label>
                    <input
                      type="number"
                      id="vehicleYear"
                      name="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={handleInputChange}
                      className="form-input"
                      min="1900"
                      max="2025"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vehicleMake" className="form-label">
                      Make *
                    </label>
                    <input
                      type="text"
                      id="vehicleMake"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g., BMW, Mercedes, Porsche"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vehicleModel" className="form-label">
                      Model *
                    </label>
                    <input
                      type="text"
                      id="vehicleModel"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g., M3, AMG GT, 911"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="vehicleVin" className="form-label">
                    VIN Number (Optional)
                  </label>
                  <input
                    type="text"
                    id="vehicleVin"
                    name="vehicleVin"
                    value={formData.vehicleVin}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="17-character VIN"
                    maxLength={17}
                  />
                </div>
              </div>

              {/* Service Information */}
              <div className="form-section">
                <h3 className="form-section-title">Service Details</h3>
                <div className="form-group">
                  <label htmlFor="serviceType" className="form-label">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  >
                    <option value="">Select a service type</option>
                    {serviceTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="description" className="form-label">
                    Service Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="Please describe the work you need done, any symptoms, or specific requirements..."
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="urgency" className="form-label">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select urgency</option>
                      {urgencyLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget" className="form-label">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Scheduling */}
              <div className="form-section">
                <h3 className="form-section-title">Preferred Scheduling</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="preferredDate" className="form-label">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="form-input"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="preferredTime" className="form-label">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select time preference</option>
                      <option value="morning">Morning (8 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 7 PM)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="form-section">
                <h3 className="form-section-title">Additional Information</h3>
                <div className="form-group">
                  <label htmlFor="additionalInfo" className="form-label">
                    Additional Notes
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="Any additional information, special requests, or questions..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-submit-section">
                {submitStatus === 'success' && (
                  <div className="form-success-message">
                    <p>
                      ✅ API Test Successful! The request was sent to ShopMonkey API. Check the
                      browser console for response details.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-error-message">
                    <p>❌ API Test Failed! Check the browser console for error details.</p>
                  </div>
                )}
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
                <p className="form-disclaimer">
                  * This form is currently set up for API testing. Clicking submit will send a test
                  request to the ShopMonkey API.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
