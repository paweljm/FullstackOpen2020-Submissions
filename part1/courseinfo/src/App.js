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

const Part = (props) => {
  return (
    <p>{props.description} {props.exercises}</p>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part description={props.parts[0].description} exercises={props.parts[0].exercises} />
      <Part description={props.parts[1].description} exercises={props.parts[1].exercises} />
      <Part description={props.parts[2].description} exercises={props.parts[2].exercises} />
    </div>
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