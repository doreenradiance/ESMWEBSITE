import { useTranslation } from 'react-i18next'

const stats = [
  { valueKey: 'impact.values.founded', labelKey: 'impact.stats.founded' },
  { valueKey: 'impact.values.focus', labelKey: 'impact.stats.focus' },
  { valueKey: 'impact.values.skills', labelKey: 'impact.stats.skills' },
  { valueKey: 'impact.values.years', labelKey: 'impact.stats.years' },
]

function Impact() {
  const { t } = useTranslation()

  return (
    <section className="section impact" id="impact">
      <div className="container">
        <header className="section__header section__header--center">
          <h2 className="section__title">{t('impact.title')}</h2>
          <p className="section__subtitle">{t('impact.subtitle')}</p>
        </header>
        <ul className="impact__stats">
          {stats.map((stat) => (
            <li key={stat.labelKey} className="impact__stat">
              <span className="impact__value">{t(stat.valueKey)}</span>
              <span className="impact__label">{t(stat.labelKey)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Impact
