import { useState } from 'react'

const Display = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({value, text}) => <p>{text} {value}</p>

const Statistics = ({statistics}) => {
  return (
    statistics.some(stat => stat.value > 0) 
      ? statistics.map(statistic => <StatisticLine text={statistic.text} value={statistic.value} />) 
      : 'No feedback given' 
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = `${(good / all) * 100}%`

  const statistics = [
    {
      value:good,
      text:'good'
    },
    {
      value:neutral,
      text:'neutral'
    },
    {
      value:bad,
      text:'bad'
    },
    {
      value:all,
      text:'all'
    },
    {
      value:average,
      text:'average'
    },
    {
      value:positive,
      text:'positive'
    }

  ]

  console.log(good,neutral,bad)

  return (
    <div>
      <Display text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text={'good'} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button handleClick={() => setBad(bad + 1)} text={'bad'} />
      <Display text='statistics' />
      <Statistics statistics={statistics} />
    </div>
  )
}

export default App