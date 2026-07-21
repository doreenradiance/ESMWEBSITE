import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div>
          <h2 className="section__title">{t('contact.title')}</h2>
          <p className="contact__intro">{t('contact.intro')}</p>
          <ul className="contact__details">
            <li>
              <span className="contact__label">{t('contact.email')}</span>
              <a href="mailto:esm.foundation1@gmail.com">esm.foundation1@gmail.com</a>
            </li>
            <li>
              <span className="contact__label">{t('contact.phone')}</span>
              <a href="tel:+233243548633">0243548633</a>
            </li>
            <li>
              <span className="contact__label">{t('contact.office')}</span>
              <address>{t('contact.addressLine1')}</address>
            </li>
            <li>
              <span className="contact__label">{t('contact.social')}</span>
              <div className="contact__social">
                <a
                  href="https://instagram.com/the_esm_foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contact.instagram')} (@the_esm_foundation)
                </a>
                <a
                  href="https://facebook.com/The_esm_foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contact.facebook')} (The_esm_foundation)
                </a>
                <a
                  href="https://www.tiktok.com/@esmfoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contact.tiktok')} (@esmfoundation.org)
                </a>
              </div>
            </li>
          </ul>
        </div>
        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <label>
            {t('contact.formName')}
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            {t('contact.formEmail')}
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            {t('contact.formMessage')}
            <textarea name="message" rows={4} required />
          </label>
          <button type="submit" className="btn btn--primary">
            {t('contact.submit')}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
