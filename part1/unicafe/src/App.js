import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
  }
  const Content = ({text}) => {
    return (
      <h1>{text}</h1>
    )
    }
const Button = ({action, text}) => {
  return (
    <button onClick={action}>
      {text}
    </button>
  )
}
const Statistics = (props) => {
  if (props.all !== 0){
    return (
      <table>
        <tbody>
          <StatisticsLine text="Good" value={props.good}/>
          <StatisticsLine text="Neutral" value={props.neutral}/>
          <StatisticsLine text="Bad" value={props.bad}/>
          <StatisticsLine text="All" value={props.all}/>
          <StatisticsLine text="Average" value={props.average}/>
          <StatisticsLine text="Positive" value={props.positive}/>

        </tbody>
        
      </table>
    )
  }
    return(
      <p>No feedback given</p>
    )
  }
  const StatisticsLine = ({text, value})=>{
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
      
    )
  }

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodOnClick = () =>{
    setGood((prevCount)=>prevCount+1)
  }
  const neutralOnClick = () =>{
    setNeutral((prevCount)=>prevCount+1)
  
  }
  const badOnClick = () =>{
    setBad((prevCount)=>prevCount+1)
  }
  const totalOfClick = () => {
    console.log("Contagem de clicks")
    return good + neutral + bad
  }
  const averageOfClick = () => {
    const point = (good*1) + (neutral*0) + (bad*-1)
    console.log(point)
    return point/totalOfClick()
  }
  const positivePercent = () => {
    console.log("Porcentagem de clicks")
    return good/totalOfClick()*100 + "%"
  }

  return (
    <div>
      <div>
      <Header text="Give us feedback"/>
      <Button action={goodOnClick} text="GOOD"/>
      <Button action={neutralOnClick} text="NEUTRAL"/>
      <Button action={badOnClick} text="BAD"/>
      </div>
      <Content text="Statistics"/>
      <Statistics 
        good={good} 
        neutral={neutral}
        bad={bad}
        all={totalOfClick()}
        average={averageOfClick()}
        positive={positivePercent()}
      />
    </div>
    
  )
}

export default App 