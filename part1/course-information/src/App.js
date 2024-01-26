const Header = (props) => {
return (
  <h1>{props.course}</h1>
)
}
const Content = (props) => {
  
  return (
    <div>
      <Part parts={props.parts[0]} exercises={props.exercises[0]}/>
      <Part parts={props.parts[1]} exercises={props.exercises[1]}/>
      <Part parts={props.parts[2]} exercises={props.exercises[2]}/>
    </div>
  )
}
const Part = (props) => {
  return(
    <p>
        {props.parts} {props.exercises}
    </p>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
  )
}
const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts= {[part1,part2,part3]} exercises ={[exercises1,exercises2,exercises3]}/>
      <Total exercises = {[exercises1,exercises2,exercises3]}/>
    </div>
  )
}
export default App