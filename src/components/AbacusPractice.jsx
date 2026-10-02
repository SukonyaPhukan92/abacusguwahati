import { useState } from 'react'
import { useLanguage } from '../i18n.jsx'

const places = [
  { label: 'placeTenThousands', compact: '10k', short: '10,000', value: 10000 },
  { label: 'placeThousands', compact: '1k', short: '1,000', value: 1000 },
  { label: 'placeHundreds', compact: '100', short: '100', value: 100 },
  { label: 'placeTens', compact: '10', short: '10', value: 10 },
  { label: 'placeOnes', compact: '1', short: '1', value: 1 },
]

function makeChallenge() {
  const first = Math.floor(Math.random() * 900) + 100
  const second = Math.floor(Math.random() * 900) + 100
  return { first, second }
}

export default function AbacusPractice() {
  const { language, t } = useLanguage()
  const [digits, setDigits] = useState([0, 0, 0, 0, 0])
  const [challenge, setChallenge] = useState(makeChallenge)
  const [feedback, setFeedback] = useState('')
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const total = digits.reduce((sum, digit, index) => sum + digit * places[index].value, 0)

  function updateDigit(index, digit) {
    setDigits((current) => current.map((value, position) => (position === index ? digit : value)))
    setFeedback('')
    setCompleted(false)
  }

  function clearBoard() {
    setDigits([0, 0, 0, 0, 0])
    setFeedback('')
    setCompleted(false)
  }

  function nextChallenge() {
    setChallenge(makeChallenge())
    clearBoard()
  }

  function checkAnswer() {
    if (total === challenge.first + challenge.second) {
      if (!completed) setScore((current) => current + 1)
      setCompleted(true)
      setFeedback(t('practice.correct'))
    } else {
      setFeedback(t('practice.tryAgain'))
      setCompleted(false)
    }
  }

  return (
    <section id="abacus-practice" className="abacus-practice reveal" aria-labelledby="practice-title">
      <div className="section">
        <div className="practice-heading">
          <div>
            <p className="eyebrow">{t('practice.eyebrow')}</p>
            <h2 id="practice-title" className="h2">{t('practice.heading')}</h2>
            <p className="practice-intro">{t('practice.intro')}</p>
          </div>
          <div className="practice-challenge" aria-live="polite">
            <div className="practice-challenge-meta">
              <span className="practice-label">{t('practice.challenge')}</span>
              <span className="practice-score" aria-label={t('practice.solved', { count: score })}>{t('practice.solved', { count: score })}</span>
            </div>
            <strong><span>{challenge.first}</span><span className="practice-plus" aria-hidden="true">+</span><span>{challenge.second}</span></strong>
          </div>
        </div>

        <aside className="practice-hint" aria-label={t('practice.quickHint')}>
          <span className="practice-hint-title">{t('practice.quickHint')}</span>
          <span><strong>1</strong> = {t('practice.one')}</span>
          <span><strong>4</strong> = {t('practice.four')}</span>
          <span>{t('practice.upperFive')} <strong>5</strong></span>
        </aside>

        <div className="practice-board" aria-label={t('practice.boardLabel')}>
          {places.map((place, index) => {
            const placeLabel = t(`practice.${place.label}`)
            const digit = digits[index]
            const lowerCount = digit % 5
            const upperActive = digit >= 5
            return (
              <div className="practice-rod" key={place.value}>
                <span className="practice-place" aria-label={placeLabel}>
                  <span className="practice-place-full" aria-hidden="true">{placeLabel}</span>
                  <span className="practice-place-compact" aria-hidden="true">{place.compact}</span>
                </span>
                <span className="practice-place-value">{place.short}</span>
                <div className="practice-upper">
                  <button
                    type="button"
                    className={`practice-bead practice-bead-upper${upperActive ? ' is-active' : ''}`}
                    aria-label={t(upperActive ? 'practice.upperOff' : 'practice.upperOn', { place: placeLabel })}
                    aria-pressed={upperActive}
                    onClick={() => updateDigit(index, (upperActive ? 0 : 5) + lowerCount)}
                  />
                </div>
                <div className="practice-beam" aria-hidden="true" />
                <div className="practice-lower">
                  {[0, 1, 2, 3].map((bead) => {
                    const active = bead < lowerCount
                    return (
                      <button
                        type="button"
                        key={bead}
                        className={`practice-bead${active ? ' is-active' : ''}`}
                        aria-label={t(active ? 'practice.lowerOff' : 'practice.lowerOn', { place: placeLabel, number: bead + 1 })}
                        aria-pressed={active}
                        onClick={() => updateDigit(index, (upperActive ? 5 : 0) + (active ? bead : bead + 1))}
                      />
                    )
                  })}
                </div>
                <span className="practice-digit" aria-label={t('practice.digit', { place: placeLabel, digit })}>{digit}</span>
              </div>
            )
          })}
        </div>

        <div className="practice-footer">
          <div className="practice-total" aria-live="polite">
            <span className="practice-label">{t('practice.total')}</span>
            <output>{total.toLocaleString(language === 'as' ? 'as-IN' : 'en-IN')}</output>
          </div>
          <div className="practice-actions">
            <button type="button" className="btn btn-secondary practice-button" onClick={clearBoard}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 2.64-6.36L3 8" /><path d="M3 3v5h5" /></svg>
              {t('practice.reset')}
            </button>
            <button type="button" className="btn btn-secondary practice-button" onClick={nextChallenge}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9a4 4 0 1 0 0 8h2" /><path d="m17 4 3 3-3 3" /><path d="M4 17h9a4 4 0 1 0 0-8h-2" /><path d="m7 20-3-3 3-3" /></svg>
              {t('practice.newSum')}
            </button>
            <button
              type="button"
              className="btn btn-primary practice-button practice-check"
              onClick={checkAnswer}
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg>
              {t('practice.check')}
            </button>
          </div>
        </div>
        {feedback && <p className={`practice-feedback${completed ? ' is-correct' : ' is-try-again'}`} role="status">{feedback}</p>}
      </div>
    </section>
  )
}