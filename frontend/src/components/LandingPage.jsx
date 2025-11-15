import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LandingPage.css';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    const revealElements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [i18n.language]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedLanguage = window.localStorage.getItem('skyjourney-language');
    if (storedLanguage && storedLanguage !== i18n.language) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('skyjourney-language', i18n.language);
    }

    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', i18n.language);
    }
  }, [i18n.language]);

  const experienceIcons = {
    curated: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 26h24L16 6 4 26Z" />
        <path d="M16 6 22 16l-3.5 4.5L16 17l-2.5 3.5L10 16 16 6Z" />
      </svg>
    ),
    hospitality: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8 14.5c0-3.2 2.3-5.7 5.2-5.7 2.1 0 3.6 1.3 4.8 3.4 1.2-2.1 2.7-3.4 4.8-3.4 2.9 0 5.2 2.5 5.2 5.7C28 20 18 26.2 18 26.2S8 20 8 14.5Z" />
        <path d="M6 22.5 10 25h12l4-2.5" />
        <path d="M10 25v2h12v-2" />
      </svg>
    ),
    logistics: (
      <svg
        viewBox="0 0 34 34"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3.5" y="12.5" width="17" height="10" rx="2.2" fill="none" />
        <path d="M20.5 15.5h4.5l5.5 5.5v3.5h-10" />
        <circle cx="11.5" cy="24.5" r="2.5" fill="none" />
        <circle cx="25.5" cy="24.5" r="2.5" fill="none" />
        <path d="M5.5 12.5V9.5h6" />
      </svg>
    ),
  };

  const essentialIcons = {
    dining: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 23h18" />
        <path d="M11 23a7 7 0 0 1 14 0" />
        <path d="M18 11V9" />
        <path d="M11 23v2.5c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V23" />
        <path d="M12 27h12" />
      </svg>
    ),
    stays: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="5" y="15" width="26" height="10" rx="2" fill="none" />
        <path d="M5 25v6" />
        <path d="M31 25v6" />
        <path d="M9 19h6" />
        <path d="M19 19h10" />
        <path d="M12 15v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
      </svg>
    ),
    experiences: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="18" cy="18" r="10" fill="none" />
        <path d="m18 12 4 6-6 6-4-6 6-6Z" />
        <circle cx="18" cy="18" r="1.6" fill="none" />
      </svg>
    ),
  };

  const specialIcons = {
    ski: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m11 8 16 20" />
        <path d="m15 8 16 20" />
        <path d="M6 27.5c2 2 4.8 3.5 7.6 3.5" />
        <path d="M24 28.5c1.8 2.2 4.4 3.2 7 3" />
        <path d="m22 12-4 4" />
      </svg>
    ),
    springs: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 16c0 2 1.7 3 1.7 4.6S10 22.9 10 24.5" />
        <path d="M18 16c0 2 1.7 3 1.7 4.6S18 22.9 18 24.5" />
        <path d="M26 16c0 2 1.7 3 1.7 4.6S26 22.9 26 24.5" />
        <path d="M9 25c0 4.5 5.6 7 9 7s9-2.5 9-7" />
      </svg>
    ),
    horse: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 16c4-6 10-9 18-7l2 5-4 4.5V24c0 4-3.5 7-7.5 7H11l-2-5.5" />
        <path d="M15 24c-1.7-.7-3-2.4-3-4.5" />
        <path d="M21 20a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z" />
      </svg>
    ),
    dining: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 14v8" />
        <path d="M14 14v8" />
        <path d="M12 14v-4" />
        <path d="M22 10c0 2.5 2 3 2 5.5S22 18 22 20.5 24 23 24 25" />
        <path d="M8 26h16" />
        <path d="M26 26h4" />
      </svg>
    ),
  };

  const serviceIcons = [
    (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 3l-4 4-4-4" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm6.406 5.838c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  ];

  const navigation = t('navigation', { returnObjects: true });
  const heroContent = t('hero', { returnObjects: true });
  const experienceHighlights = t('experience.highlights', { returnObjects: true }).map((item) => ({
    ...item,
    icon: experienceIcons[item.icon] ?? null,
  }));

  const toursContent = t('tours', { returnObjects: true });
  const tours = toursContent.cards ?? [];
  const itineraryContent = t('itinerary', { returnObjects: true });
  const itineraryDays = itineraryContent.days ?? [];
  const essentialsContent = t('essentials', { returnObjects: true });
  const essentials = (essentialsContent.cards ?? []).map((item) => ({
    ...item,
    icon: essentialIcons[item.icon] ?? null,
  }));
  const inclusionsContent = t('inclusions', { returnObjects: true });
  const inclusions = inclusionsContent.included?.items ?? [];
  const exclusions = inclusionsContent.excluded?.items ?? [];
  const packingContent = t('packing', { returnObjects: true });
  const packingList = packingContent.items ?? [];
  const specialContent = t('special', { returnObjects: true });
  const specialHighlights = (specialContent.highlights ?? []).map((item) => ({
    ...item,
    icon: specialIcons[item.icon] ?? null,
  }));
  const servicesContent = t('services', { returnObjects: true });
  const services = servicesContent.cards ?? [];
  const galleryContent = t('gallery', { returnObjects: true });
  const galleryImages = galleryContent.images ?? [];
  const footerContent = t('footer', { returnObjects: true });
  const navLinks = navigation.links ?? [];
  const heroStats = heroContent.stats ?? [];
  const nextLanguage = i18n.language === 'en' ? 'ru' : 'en';
  const toggleLabel = t(`navigation.toggle.label.${nextLanguage}`);
  const toggleAria = t('navigation.toggle.aria', {
    lang: t(`navigation.toggle.languageNames.${nextLanguage}`),
  });
  const footerNote = t('footer.note', { year: new Date().getFullYear() });
  const toggleLanguage = () => {
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <div className="landing-page">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">SKY JOURNEY</span>
          </div>
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button
              type="button"
              className="language-toggle"
              onClick={toggleLanguage}
              aria-label={toggleAria}
              title={toggleAria}
            >
              {toggleLabel}
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
              aria-label="Instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 134 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M110.042 31.0217C110.042 26.5991 106.458 23.028 102.052 23.028C97.6454 23.028 94.0578 26.5991 94.0578 31.0217C94.0578 35.4281 97.6454 38.9992 102.052 38.9992C106.458 38.9992 110.042 35.4281 110.042 31.0217Z"
                  fill="url(#instagram-gradient-0)"
                />
                <path
                  d="M120.69 93.4201C120.394 99.9079 119.309 103.433 118.408 105.774C117.198 108.878 115.754 111.098 113.413 113.426C111.098 115.754 108.878 117.194 105.774 118.391C103.433 119.305 99.8946 120.394 93.407 120.703C86.3931 121.012 84.3148 121.078 66.5285 121.078C48.7587 121.078 46.6639 121.012 39.65 120.703C33.1624 120.394 29.6406 119.305 27.2992 118.391C24.1787 117.194 21.9757 115.754 19.6476 113.426C17.3029 111.098 15.8595 108.878 14.6658 105.774C13.7647 103.433 12.6632 99.9079 12.3836 93.4201C12.0418 86.4062 11.9791 84.2951 11.9791 66.545C11.9791 48.7587 12.0418 46.6639 12.3836 39.65C12.6632 33.1624 13.7647 29.6407 14.6658 27.2795C15.8595 24.1787 17.3029 21.9722 19.6476 19.6441C21.9757 17.3195 24.1787 15.8757 27.2992 14.6658C29.6406 13.7484 33.1624 12.6763 39.65 12.3673C46.6639 12.0581 48.7587 11.9791 66.5285 11.9791C84.3148 11.9791 86.3931 12.0581 93.407 12.3673C99.8946 12.6763 103.433 13.7484 105.774 14.6658C108.878 15.8757 111.098 17.3195 113.413 19.6441C115.754 21.9722 117.198 24.1787 118.408 27.2795C119.309 29.6407 120.394 33.1624 120.69 39.65C121.015 46.6639 121.094 48.7587 121.094 66.545C121.094 84.2951 121.015 86.4062 120.69 93.4201ZM132.669 39.1042C132.343 32.0146 131.225 27.171 129.565 22.9523C127.875 18.5755 125.609 14.8663 121.9 11.1572C118.207 7.46449 114.498 5.19878 110.121 3.48897C105.886 1.84474 101.059 0.713486 93.9658 0.404465C86.873 0.0624084 84.6075 0 66.5285 0C48.466 0 46.184 0.0624084 39.0912 0.404465C32.0146 0.713486 27.1907 1.84474 22.9358 3.48897C18.5755 5.19878 14.8663 7.46449 11.1737 11.1572C7.46448 14.8663 5.19877 18.5755 3.49215 22.9523C1.84793 27.171 0.729998 32.0146 0.387935 39.1042C0.0789187 46.1971 0 48.466 0 66.545C0 84.6076 0.0789187 86.873 0.387935 93.9658C0.729998 101.042 1.84793 105.883 3.49215 110.121C5.19877 114.481 7.46448 118.207 11.1737 121.9C14.8663 125.593 18.5755 127.875 22.9358 129.581C27.1907 131.225 32.0146 132.344 39.0912 132.669C46.184 132.995 48.466 133.074 66.5285 133.074C84.6075 133.074 86.873 132.995 93.9658 132.669C101.059 132.344 105.886 131.225 110.121 129.581C114.498 127.875 118.207 125.593 121.9 121.9C125.609 118.207 127.875 114.481 129.565 110.121C131.225 105.883 132.343 101.042 132.669 93.9658C132.995 86.873 133.073 84.6076 133.073 66.545C133.073 48.466 132.995 46.1971 132.669 39.1042Z"
                  fill="url(#instagram-gradient-1)"
                />
                <path
                  d="M66.5285 88.7046C54.2862 88.7046 44.3523 78.787 44.3523 66.5448C44.3523 54.2828 54.2862 44.3523 66.5285 44.3523C78.7742 44.3523 88.7212 54.2828 88.7212 66.5448C88.7212 78.787 78.7742 88.7046 66.5285 88.7046ZM66.5285 32.3567C47.657 32.3567 32.3732 47.6733 32.3732 66.5448C32.3732 85.3999 47.657 100.7 66.5285 100.7C85.3999 100.7 100.7 85.3999 100.7 66.5448C100.7 47.6733 85.3999 32.3567 66.5285 32.3567Z"
                  fill="url(#instagram-gradient-2)"
                />
                <defs>
                  <linearGradient
                    id="instagram-gradient-0"
                    x1="1.20024"
                    y1="131.698"
                    x2="121.99"
                    y2="10.9086"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFD521" />
                    <stop offset="0.05" stopColor="#FFD521" />
                    <stop offset="0.501119" stopColor="#F50000" />
                    <stop offset="0.95" stopColor="#B900B4" />
                    <stop offset="0.950079" stopColor="#B900B4" />
                    <stop offset="1" stopColor="#B900B4" />
                  </linearGradient>
                  <linearGradient
                    id="instagram-gradient-1"
                    x1="1.2003"
                    y1="131.863"
                    x2="122.089"
                    y2="10.9747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFD521" />
                    <stop offset="0.05" stopColor="#FFD521" />
                    <stop offset="0.501119" stopColor="#F50000" />
                    <stop offset="0.95" stopColor="#B900B4" />
                    <stop offset="0.950079" stopColor="#B900B4" />
                    <stop offset="1" stopColor="#B900B4" />
                  </linearGradient>
                  <linearGradient
                    id="instagram-gradient-2"
                    x1="1.23163"
                    y1="131.867"
                    x2="122.091"
                    y2="11.0069"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFD521" />
                    <stop offset="0.05" stopColor="#FFD521" />
                    <stop offset="0.501119" stopColor="#F50000" />
                    <stop offset="0.95" stopColor="#B900B4" />
                    <stop offset="0.950079" stopColor="#B900B4" />
                    <stop offset="1" stopColor="#B900B4" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon youtube"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2.8" y="5.5" width="18.4" height="13" rx="3" ry="3" />
                <path d="m10 9 5.5 3-5.5 3V9Z" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <button className="inquire-btn">{navigation.inquire}</button>
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">{heroContent.badge}</div>
          <h1 className="hero-title">
            <span className="title-main">{heroContent.titleMain}</span>
            <span className="title-location">{heroContent.titleLocation}</span>
          </h1>
          <p className="hero-subtitle">{heroContent.subtitle}</p>
          <div className="hero-cta">
            <a className="cta-primary" href="#itinerary">{heroContent.ctaPrimary}</a>
            <a className="cta-secondary" href="#inclusions">{heroContent.ctaSecondary}</a>
          </div>
          <div className="hero-stats">
            {heroStats.map((item, index) => (
              <div
                className="stat-card reveal"
                key={item.label}
                data-reveal
                style={{ '--reveal-delay': `${index * 0.1 + 0.2}s` }}
              >
                <span className="stat-label">{item.label}</span>
                <span className="stat-value">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="hero-note">
            <span className="dot" /> {heroContent.note}
          </div>
        </div>
      </section>

      <section className="experience-section" aria-label="Sky Journey difference">
        <div className="experience-grid">
          {experienceHighlights.map((item, index) => (
            <article
              className="experience-card reveal"
              key={item.title}
              data-reveal
              style={{ '--reveal-delay': `${index * 0.12}s` }}
            >
              <div className="experience-icon" aria-hidden="true">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tours-section" id="tours" aria-labelledby="tours-heading">
        <div className="section-heading reveal" data-reveal style={{ '--reveal-delay': '0.05s' }}>
          <p className="eyebrow">{toursContent.eyebrow}</p>
          <h2 id="tours-heading">{toursContent.heading}</h2>
          <p className="section-description">{toursContent.description}</p>
        </div>
        <div className="tours-grid">
          {tours.map((tour, index) => (
            <article
              className="tour-card reveal"
              key={tour.title}
              data-reveal
              style={{ '--reveal-delay': `${index * 0.12 + 0.1}s` }}
            >
              <div className="tour-image">
                <img src={tour.image} alt={tour.title} loading="lazy" />
                <span className="tour-tag">{tour.tag}</span>
              </div>
              <div className="tour-content">
                <p className="tour-meta">{tour.meta}</p>
                <h3 className="tour-title">{tour.title}</h3>
                <p className="tour-description">{tour.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="itinerary" id="itinerary" aria-labelledby="itinerary-heading">
        <div className="section-heading reveal" data-reveal style={{ '--reveal-delay': '0.05s' }}>
          <p className="eyebrow">{itineraryContent.eyebrow}</p>
          <h2 id="itinerary-heading">{itineraryContent.heading}</h2>
          <p className="section-description">{itineraryContent.description}</p>
        </div>
        <div className="timeline">
          {itineraryDays.map((day, index) => (
            <article
              className="timeline-card reveal"
              key={day.day}
              data-reveal
              style={{ '--reveal-delay': `${index * 0.1 + 0.1}s` }}
            >
              <div className="timeline-marker">
                <span>{day.day}</span>
              </div>
              <div className="timeline-content">
                <h3>{day.title}</h3>
                <p className="timeline-intro">{day.intro}</p>
                <ul>
                  {day.schedule.map((item) => (
                    <li key={`${day.day}-${item.label}`}>
                      <span className="item-label">{item.label}:</span>{' '}
                      {Array.isArray(item.detail) ? (
                        <ul className="sub-list">
                          {item.detail.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <span>{item.detail}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="essentials" id="essentials" aria-labelledby="essentials-heading">
        <div className="section-heading reveal" data-reveal style={{ '--reveal-delay': '0.05s' }}>
          <p className="eyebrow">{essentialsContent.eyebrow}</p>
          <h2 id="essentials-heading">{essentialsContent.heading}</h2>
          <p className="section-description">{essentialsContent.description}</p>
        </div>
        <div className="essentials-grid">
          {essentials.map((card, index) => (
            <article
              className="essential-card reveal"
              key={card.title}
              data-reveal
              style={{ '--reveal-delay': `${index * 0.14 + 0.08}s` }}
            >
              <div className="essential-icon" aria-hidden="true">{card.icon}</div>
              <div className="essential-body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="essential-footnote">{card.footnote}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="inclusions-section" id="inclusions" aria-labelledby="inclusions-heading">
        <div className="section-heading reveal" data-reveal style={{ '--reveal-delay': '0.05s' }}>
          <p className="eyebrow">{inclusionsContent.eyebrow}</p>
          <h2 id="inclusions-heading">{inclusionsContent.heading}</h2>
        </div>
        <div className="inc-exc-grid">
          <article className="inc-card reveal" data-reveal style={{ '--reveal-delay': '0.12s' }}>
            <h3>{inclusionsContent.included?.heading}</h3>
            <ul>
              {inclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="exc-card reveal" data-reveal style={{ '--reveal-delay': '0.24s' }}>
            <h3>{inclusionsContent.excluded?.heading}</h3>
            <ul>
              {exclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="packing" aria-labelledby="packing-heading">
        <div className="section-heading reveal" data-reveal style={{ '--reveal-delay': '0.05s' }}>
          <p className="eyebrow">{packingContent.eyebrow}</p>
          <h2 id="packing-heading">{packingContent.heading}</h2>
        </div>
        <div className="packing-grid">
          {packingList.map((item, index) => (
            <span
              className="packing-chip reveal"
              data-reveal
              style={{ '--reveal-delay': `${index * 0.06 + 0.08}s` }}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="why-special" aria-labelledby="special-heading">
        <div className="section-heading reveal" data-reveal style={{ '--reveal-delay': '0.05s' }}>
          <p className="eyebrow">{specialContent.eyebrow}</p>
          <h2 id="special-heading">{specialContent.heading}</h2>
          <p className="section-description">{specialContent.description}</p>
        </div>
        <div className="special-grid">
          {specialHighlights.map((item, index) => (
            <article
              className="special-card reveal"
              key={item.title}
              data-reveal
              style={{ '--reveal-delay': `${index * 0.12 + 0.1}s` }}
            >
              <div className="special-icon" aria-hidden="true">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-heading">
        <div className="section-heading reveal" data-reveal style={{ '--reveal-delay': '0.05s' }}>
          <p className="eyebrow">{servicesContent.eyebrow}</p>
          <h2 id="services-heading">{servicesContent.heading}</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className="service-card reveal"
              key={service.title}
              data-reveal
              style={{ '--reveal-delay': `${index * 0.1 + 0.12}s` }}
            >
              <div className="service-icon">{serviceIcons[index] ?? null}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery" id="gallery" aria-labelledby="gallery-heading">
        <div className="section-heading reveal" data-reveal style={{ '--reveal-delay': '0.05s' }}>
          <p className="eyebrow">{galleryContent.eyebrow}</p>
          <h2 id="gallery-heading">{galleryContent.heading}</h2>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <figure
              className="gallery-item reveal"
              key={image.src}
              data-reveal
              style={{ '--reveal-delay': `${index * 0.12 + 0.1}s` }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">Sky Journey</span>
            <p>{footerContent.tagline}</p>
          </div>
          <div className="footer-actions">
            <a href="mailto:hello@skyjourney.travel" className="footer-link">hello@skyjourney.travel</a>
            <a href="tel:+77770000000" className="footer-link">+7 777 000 00 00</a>
          </div>
        </div>
        <p className="footer-note">{footerNote}</p>
      </footer>
    </div>
  );
};

export default LandingPage;
