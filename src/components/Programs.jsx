import { useTranslation } from 'react-i18next'

const programKeys = ['food', 'youth', 'counselling', 'outreach']

function Programs() {
  const { t } = useTranslation()

  return (
    <section className="section section--muted programs" id="programs">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">{t('programs.title')}</h2>
          <p className="section__subtitle">{t('programs.subtitle')}</p>
        </header>
        <ul className="programs__grid">
          {programKeys.map((key) => (
            <li key={key} className="programs__card">
              <h3 className="programs__card-title">
                {t(`programs.items.${key}.title`)}
              </h3>
              <p>{t(`programs.items.${key}.description`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Programs;