import Navigation from '../components/Navigation'
import '../styles.css'

export default function BookNowPage() {
  return (
    <div className="homepage">
      <Navigation activePage="book-now" />

      {/* Main Content */}
      <section className="book-now-section">
        <div className="book-now-container">
          <div className="book-now-header">
            <h1 className="book-now-title">Request a Quote</h1>
            <p className="book-now-description">
              Get a personalized quote for your vehicle service needs. Fill out the form below and
              we'll get back to you with a detailed estimate.
            </p>
          </div>

          <div className="iframe-container">
            <iframe
              src="https://app.shopmonkey.cloud/public/quote-request/5f7f3d5ceb5e250aaf9df14f?noExternalScripts=1"
              title="Quote Request Form"
              className="quote-iframe"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  )
}
