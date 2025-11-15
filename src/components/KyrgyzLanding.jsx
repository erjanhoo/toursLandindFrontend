import React from 'react'
import './KyrgyzLanding.css'
import Logo from './Logo'

const KyrgyzLanding = () => {
  return (
    <div className="kg-landing">
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="logo-wrap">
            <Logo />
          </div>
          <h1 className="hero-title">Explore Kyrgyzstan</h1>
          <p className="hero-sub">Mountains, lakes & timeless nomad culture — 7 day adventure</p>
          <div className="hero-ctas">
            <a className="btn primary" href="#book">Book Now</a>
            <a className="btn ghost" href="#more">Learn More</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="highlights" className="row highlights">
          <div className="card">
            <h3>Tien Shan Peaks</h3>
            <p>Hike high ridges with panoramic views over alpine valleys.</p>
          </div>
          <div className="card">
            <h3>Issyk-Kul Lake</h3>
            <p>Swim in one of the world's largest alpine lakes, set against snow-capped mountains.</p>
          </div>
          <div className="card">
            <h3>Nomad Life</h3>
            <p>Stay in yurt camps, taste kumis (fermented mare's milk) and meet local families.</p>
          </div>
        </section>

        <section id="itinerary" className="row itinerary">
          <h2>Sample 7-Day Itinerary</h2>
          <div className="itinerary-grid">
            <div className="it">Day 1: Arrival to Bishkek — city walk & bazaars.</div>
            <div className="it">Day 2: Ala-Archa National Park day hike.</div>
            <div className="it">Day 3: Drive to Karakol — cultural evening.</div>
            <div className="it">Day 4: Jeti-Oguz canyons & hot springs.</div>
            <div className="it">Day 5: Issyk-Kul relaxation and lakeside activities.</div>
            <div className="it">Day 6: Yurt stay and nomad experiences.</div>
            <div className="it">Day 7: Return to Bishkek & departure.</div>
          </div>
        </section>

        <section id="gallery" className="row gallery">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <img alt="Tien Shan" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" />
            <img alt="lake" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format&fit=crop" />
            <img alt="yurt" src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1200&q=80&auto=format&fit=crop" />
            <img alt="canyon" src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=1200&q=80&auto=format&fit=crop" />
          </div>
        </section>

        <section id="book" className="row contact">
          <h2>Ready to go?</h2>
          <p>Contact our travel specialists and reserve your spot.</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your name" aria-label="Your name" />
            <input placeholder="Email" aria-label="Email" />
            <button className="btn primary">Request Info</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© Sky Journey — Kyrgyzstan Tours</div>
      </footer>
    </div>
  )
}

export default KyrgyzLanding
