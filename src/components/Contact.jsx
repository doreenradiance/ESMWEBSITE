import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const RECIPIENT = 'esm.foundation1@gmail.com'

function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (String(data.get('_honey') || '').trim()) {
      form.reset()
      setStatus('sent')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${RECIPIENT}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: data.get('name'),
            email: data.get('email'),
            message: data.get('message'),
            _replyto: data.get('email'),
            _subject: 'Message from the ESM Foundation website',
            _captcha: 'false',
            _template: 'table',
          }),
        },
      )
      const result = await response.json().catch(() => null)
      const accepted = result?.success === true || result?.success === 'true'

      if (!response.ok || !accepted) {
        setStatus('error')
        return
      }

      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div>
          <h2 className="section__title">{t('contact.title')}</h2>
          <p className="contact__intro">{t('contact.intro')}</p>
          <ul className="contact__details">
            <li>
              <span className="contact__label">{t('contact.email')}</span>
              <a href={`mailto:${RECIPIENT}`}>{RECIPIENT}</a>
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
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="_honey"
            className="contact__honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
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
          <button
            type="submit"
            className="btn btn--primary"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? t('contact.sending') : t('contact.submit')}
          </button>
          {status === 'sent' ? (
            <p className="contact__status" role="status">
              {t('contact.sent', { email: RECIPIENT })}
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="contact__status contact__status--error" role="alert">
              {t('contact.error')}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default Contact
