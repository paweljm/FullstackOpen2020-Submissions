import { useState } from 'react'

const Display = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({value, text}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({statistics}) => {
    if(statistics.some(stat => stat.value > 0) ){
      return (
        <table>
          <tbody>
          {statistics.map(statistic => <StatisticLine key={statistic.id} text={statistic.text} value={statistic.value} />)} 
          </tbody>
        </table>
      )
    }
    return 'No feedback given'
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
      id: 1,
      value:good,
      text:'good'
    },
    {
      id: 2,
      value:neutral,
      text:'neutral'
    },
    {
      id: 3,
      value:bad,
      text:'bad'
    },
    {
      id: 4,
      value:all,
      text:'all'
    },
    {
      id: 5,
      value:average,
      text:'average'
    },
    {
      id: 6,
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