import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">{t('brand')}</p>
        <p className="footer__slogan">{t('slogan')}</p>
        <p className="footer__tagline">{t('tagline')}</p>
        <div className="footer__social">
          <a
            href="https://instagram.com/the_esm_foundation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/The_esm_foundation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.tiktok.com/@esmfoundation.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
        </div>
        <p className="footer__copy">{t('footer.copyright', { year })}</p>
      </div>
    </footer>
  )
}

export default Footer
