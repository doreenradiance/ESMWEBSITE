import logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'

const navLinks = [
  { href: '#about', key: 'nav.about' },
  { href: '#programs', key: 'nav.programs' },
  { href: '#impact', key: 'nav.impact' },
  { href: '#events', key: 'nav.events' },
  { href: '#get-involved', key: 'nav.getInvolved' },
  { href: '#contact', key: 'nav.contact' },
]

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
]

function Header() {
  const { t, i18n } = useTranslation()

  const setLanguage = (code) => {
    i18n.changeLanguage(code)
    document.documentElement.lang = code
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__brand">
          <img src={logo} alt="" className="header__logo" />
          <span className="header__name">{t('brand')}</span>
        </a>
        <nav className="header__nav" aria-label={t('nav.main')}>
          <ul className="header__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{t(link.key)}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <div
            className="header__lang"
            role="group"
            aria-label={t('language')}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                className={
                  i18n.language.startsWith(lang.code)
                    ? 'header__lang-btn header__lang-btn--active'
                    : 'header__lang-btn'
                }
                onClick={() => setLanguage(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <a href="#get-involved" className="btn btn--primary header__cta">
            {t('donate')}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
