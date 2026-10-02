import { useTranslation } from 'react-i18next'
import eventDetails from '../data/events'

const imageModules = import.meta.glob(
  '../assets/events/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
)

function filenameFromPath(path) {
  return path.split('/').pop()
}

function titleFromFilename(filename) {
  const base = filename.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim()
  if (!base) return ''
  return base.charAt(0).toUpperCase() + base.slice(1)
}

function listEvents() {
  return Object.entries(imageModules)
    .map(([path, src]) => {
      const filename = filenameFromPath(path)
      const details = eventDetails[filename] ?? {}
      return {
        src,
        filename,
        title: details.title || titleFromFilename(filename),
        date: details.date || '',
        description: details.description || '',
      }
    })
    .sort((a, b) => a.filename.localeCompare(b.filename))
}

function Events() {
  const { t } = useTranslation()
  const events = listEvents()

  return (
    <section className="section section--muted events" id="events">
      <div className="container">
        <header className="section__header section__header--center">
          <h2 className="section__title">{t('events.title')}</h2>
          <p className="section__subtitle">{t('events.subtitle')}</p>
        </header>
        {events.length === 0 ? (
          <p className="events__empty">{t('events.empty')}</p>
        ) : (
          <ul className="events__grid">
            {events.map((event) => (
              <li key={event.filename} className="events__card">
                <img
                  src={event.src}
                  alt={event.title || t('events.photoFallback')}
                  className="events__image"
                />
                <div className="events__body">
                  {event.date ? (
                    <p className="events__date">{event.date}</p>
                  ) : null}
                  <h3 className="events__title">
                    {event.title || t('events.photoFallback')}
                  </h3>
                  {event.description ? (
                    <p className="events__text">{event.description}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Events
