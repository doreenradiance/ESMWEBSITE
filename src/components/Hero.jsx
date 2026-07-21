import logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <img src={logo} alt="ESM Foundation logo" className="hero__logo" />
        <p className="hero__eyebrow">{t('brand')}</p>
        <h1 className="hero__title">{t('tagline')}</h1>
        <p className="hero__lead">{t('hero.lead')}</p>
        <div className="hero__actions">
          <a href="#get-involved" className="btn btn--primary">
            {t('hero.supportCta')}
          </a>
          <a href="#programs" className="btn btn--outline">
            {t('hero.programsCta')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
