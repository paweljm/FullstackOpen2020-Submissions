const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Total = (props) => {
  const totalExercises = props.exerciseTotals.reduce((exerciseOverallTotal, totalExercises) => exerciseOverallTotal + totalExercises, 0)
  return(
    <p>Number of exercises {totalExercises}</p>
  )
}

const Content = (props) =>{
  const renderedParts = []
  props.parts.forEach(part => renderedParts.push(<p>{part.description} {part.exercises}</p>))
  return(
    renderedParts
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={[{ description:part1, exercises:exercises1 }, { description:part2, exercises:exercises2 }, { description:part3, exercises:exercises3 }]} />
      <Total exerciseTotals={[exercises1,exercises2,exercises3]} />
    </div>
  )
}

export default App