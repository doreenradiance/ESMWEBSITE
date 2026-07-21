import { Trans, useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()

  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__content">
          <h2 className="section__title">{t('about.title')}</h2>
          <p>
            <Trans
              i18nKey="about.paragraph1"
              components={{ strong: <strong /> }}
            />
          </p>
          <p>{t('about.paragraph2')}</p>
          <p>{t('about.paragraph3')}</p>
          <dl className="about__meta">
            <div>
              <dt>{t('about.foundedLabel')}</dt>
              <dd>{t('about.foundedText')}</dd>
            </div>
            <div>
              <dt>{t('about.founderLabel')}</dt>
              <dd>{t('about.founderText')}</dd>
            </div>
          </dl>
        </div>
        <aside className="about__card" aria-label={t('about.missionLabel')}>
          <h3 className="about__card-title">{t('about.missionTitle')}</h3>
          <p>{t('about.missionText')}</p>
          <h3 className="about__card-title">{t('about.visionTitle')}</h3>
          <p>{t('about.visionText')}</p>
          <h3 className="about__card-title">{t('about.objectiveTitle')}</h3>
          <p>{t('about.objectiveText')}</p>
        </aside>
      </div>
    </section>
  )
}

export default About
