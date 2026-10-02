import { useState } from 'react'

const places = [
  { label: 'Ten thousands', compact: '10k', short: '10,000', value: 10000 },
  { label: 'Thousands', compact: '1k', short: '1,000', value: 1000 },
  { label: 'Hundreds', compact: '100', short: '100', value: 100 },
  { label: 'Tens', compact: '10', short: '10', value: 10 },
  { label: 'Ones', compact: '1', short: '1', value: 1 },
]

function makeChallenge() {
  const first = Math.floor(Math.random() * 900) + 100
  const second = Math.floor(Math.random() * 900) + 100
  return { first, second }
}

export default function AbacusPractice() {
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
      setFeedback('Correct! You solved the sum.')
    } else {
      setFeedback('Not quite yet. Keep moving the beads and try again.')
      setCompleted(false)
    }
  }

  return (
    <section id="abacus-practice" className="abacus-practice reveal" aria-labelledby="practice-title">
      <div className="section">
        <div className="practice-heading">
          <div>
            <p className="eyebrow">Interactive practice</p>
            <h2 id="practice-title" className="h2">Try the abacus</h2>
            <p className="practice-intro">Make the sum, one bead at a time.</p>
          </div>
          <div className="practice-challenge" aria-live="polite">
            <div className="practice-challenge-meta">
              <span className="practice-label">Your challenge</span>
              <span className="practice-score" aria-label={`${score} sums solved`}>{score} solved</span>
            </div>
            <strong><span>{challenge.first}</span><span className="practice-plus" aria-hidden="true">+</span><span>{challenge.second}</span></strong>
          </div>
        </div>

        <aside className="practice-hint" aria-label="Abacus bead values">
          <span className="practice-hint-title">Quick hint</span>
          <span><strong>1</strong> = one lower bead</span>
          <span><strong>4</strong> = all four lower beads</span>
          <span>Upper bead = <strong>5</strong></span>
        </aside>

        <div className="practice-board" aria-label="Interactive five-column abacus">
          {places.map((place, index) => {
            const digit = digits[index]
            const lowerCount = digit % 5
            const upperActive = digit >= 5
            return (
              <div className="practice-rod" key={place.value}>
                <span className="practice-place" aria-label={place.label}>
                  <span className="practice-place-full" aria-hidden="true">{place.label}</span>
                  <span className="practice-place-compact" aria-hidden="true">{place.compact}</span>
                </span>
                <span className="practice-place-value">{place.short}</span>
                <div className="practice-upper">
                  <button
                    type="button"
                    className={`practice-bead practice-bead-upper${upperActive ? ' is-active' : ''}`}
                    aria-label={`${place.label}: ${upperActive ? 'move five bead away' : 'move five bead toward the bar'}`}
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
                        aria-label={`${place.label}: ${active ? 'move' : 'add'} lower bead ${bead + 1}`}
                        aria-pressed={active}
                        onClick={() => updateDigit(index, (upperActive ? 5 : 0) + (active ? bead : bead + 1))}
                      />
                    )
                  })}
                </div>
                <span className="practice-digit" aria-label={`${place.label} digit ${digit}`}>{digit}</span>
              </div>
            )
          })}
        </div>

        <div className="practice-footer">
          <div className="practice-total" aria-live="polite">
            <span className="practice-label">Your number</span>
            <output>{total.toLocaleString('en-IN')}</output>
          </div>
          <div className="practice-actions">
            <button type="button" className="btn btn-secondary practice-button" onClick={clearBoard}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 2.64-6.36L3 8" /><path d="M3 3v5h5" /></svg>
              Reset beads
            </button>
            <button type="button" className="btn btn-secondary practice-button" onClick={nextChallenge}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9a4 4 0 1 0 0 8h2" /><path d="m17 4 3 3-3 3" /><path d="M4 17h9a4 4 0 1 0 0-8h-2" /><path d="m7 20-3-3 3-3" /></svg>
              New sum
            </button>
            <button
              type="button"
              className="btn btn-primary practice-button practice-check"
              onClick={checkAnswer}
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg>
              Check answer
            </button>
          </div>
        </div>
        {feedback && <p className={`practice-feedback${completed ? ' is-correct' : ' is-try-again'}`} role="status">{feedback}</p>}
      </div>
    </section>
  )
}