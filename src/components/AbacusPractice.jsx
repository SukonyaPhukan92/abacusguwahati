import { useState } from 'react'

const places = [
  { label: 'Ten thousands', short: '10,000', value: 10000 },
  { label: 'Thousands', short: '1,000', value: 1000 },
  { label: 'Hundreds', short: '100', value: 100 },
  { label: 'Tens', short: '10', value: 10 },
  { label: 'Ones', short: '1', value: 1 },
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
  const total = digits.reduce((sum, digit, index) => sum + digit * places[index].value, 0)

  function updateDigit(index, digit) {
    setDigits((current) => current.map((value, position) => (position === index ? digit : value)))
    setFeedback('')
  }

  function clearBoard() {
    setDigits([0, 0, 0, 0, 0])
    setFeedback('')
  }

  function nextChallenge() {
    setChallenge(makeChallenge())
    clearBoard()
  }

  return (
    <section id="abacus-practice" className="abacus-practice reveal" aria-labelledby="practice-title">
      <div className="section">
        <div className="practice-heading">
          <div>
            <p className="eyebrow">Your turn</p>
            <h2 id="practice-title" className="h2">Try the abacus</h2>
            <p className="practice-intro">Move the beads to make the sum. The number changes as you play.</p>
          </div>
          <div className="practice-challenge" aria-live="polite">
            <span className="practice-label">Solve this sum</span>
            <strong>{challenge.first} <span aria-hidden="true">+</span> {challenge.second}</strong>
          </div>
        </div>

        <div className="practice-board" aria-label="Interactive five-column abacus">
          {places.map((place, index) => {
            const digit = digits[index]
            const lowerCount = digit % 5
            const upperActive = digit >= 5
            return (
              <div className="practice-rod" key={place.value}>
                <span className="practice-place" aria-label={place.label}>{place.short}</span>
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
            <button type="button" className="btn btn-secondary practice-button" onClick={clearBoard}>Reset beads</button>
            <button type="button" className="btn btn-secondary practice-button" onClick={nextChallenge}>New sum</button>
            <button
              type="button"
              className="btn btn-primary practice-button"
              onClick={() => setFeedback(total === challenge.first + challenge.second ? 'That is right. Nicely done!' : 'Not quite yet. Keep moving the beads and try again.')}
            >
              Check answer
            </button>
          </div>
        </div>
        <p className="practice-feedback" aria-live="polite">{feedback}</p>
      </div>
    </section>
  )
}