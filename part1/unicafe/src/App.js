import { useState } from 'react'

const Display = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistic = ({value, text}) => <p>{text} {value}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log(good,neutral,bad)

  return (
    <div>
      <Display text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text={'good'} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button handleClick={() => setBad(bad + 1)} text={'bad'} />
      <Display text='statistics' />
      <Statistic value={good} text='good' />
      <Statistic value={neutral} text='neutral' />
      <Statistic value={bad} text='bad' />
    </div>
  )
}

export default App