import { useTranslation } from 'react-i18next'

function GetInvolved() {
  const { t } = useTranslation()

  return (
    <section className="section section--accent get-involved" id="get-involved">
      <div className="container get-involved__inner">
        <div className="get-involved__content">
          <h2 className="section__title section__title--light">
            {t('getInvolved.title')}
          </h2>
          <p>{t('getInvolved.lead')}</p>
          <p className="get-involved__quote">{t('getInvolved.quote')}</p>
        </div>
        <div className="get-involved__cards">
          <article className="get-involved__card">
            <h3>{t('getInvolved.donateTitle')}</h3>
            <p>{t('getInvolved.donateText')}</p>
            <a href="#contact" className="btn btn--light">
              {t('getInvolved.donateCta')}
            </a>
          </article>
          <article className="get-involved__card">
            <h3>{t('getInvolved.volunteerTitle')}</h3>
            <p>{t('getInvolved.volunteerText')}</p>
            <a href="#contact" className="btn btn--outline-light">
              {t('getInvolved.volunteerCta')}
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved
