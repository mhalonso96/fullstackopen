import { useState } from 'react'

const Header = (props) => {
console.log(props)
return (
  <h1>{props.course.name}</h1>
)
}

const Content = (props) => {
    console.log(props)
  return (
    <div>
      <Part parts={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part parts={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part parts={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <p>
        {props.parts} {props.exercises}
    </p>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}
const Exibir = ({ contador }) => {
  return (
    <div>{contador}</div>
  )
}
const Botao = ({ onClick, texto }) => (
  <button onClick={onClick}>
    {texto}
  </button>
)
// const App = () => {
//    const course = {
//     name: 'Desenvolvimento de aplicação Half Stack',
//     parts: [
//       {
//         name: 'Fundamentos da biblioteca React',
//         exercises: 10
//       },
//       {
//         name: 'Usando props para passar dados',
//         exercises: 7
//       },
//       {
//         name: 'Estado de um componente',
//         exercises: 14
//       }
//     ]
//   }
//   const [contador, setContador] = useState(0)
//   // setTimeout(
//   //   () => setContador(contador + 1), 1000
//   // )
//   console.log('renderizando...', contador)
//   const aumentarEmUm = () => setContador(contador + 1)
//   const diminuirEmUm = () => setContador(contador - 1)
//   const zerarContador = () => setContador(0)

//   const [esquerda, setEsquerda] = useState(0) 
//   const [direita, setDireita] = useState(0) 

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//       <div>
//         <Exibir contador={contador}/>
//         <Botao
//         onClick={aumentarEmUm}
//         texto='mais+'
//       />
//       <Botao
//         onClick={zerarContador}
//         texto='zerar'
//       />     
//       <Botao
//         onClick={diminuirEmUm}
//         texto='menos-'
//       />
//       </div>
//       <div>
//       {esquerda}
//       <button onClick={() => setEsquerda(esquerda + 1)}>
//         Esquerda
//       </button>
//       <button onClick={() => setDireita(direita + 1)}>
//         Direita
//       </button>
//       {direita}
//     </div>
      
//     </div>
    
//   )
// }
const App = () => {
  const [esquerda, setEsquerda] = useState(0)
  const [direita, setDireita] = useState(0)

  const [todosOsCliques, setTodos] = useState([])
  const [total, setTotal] = useState(0)


  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E'))
    const atualizaEsquerda = esquerda + 1
    setEsquerda(atualizaEsquerda)
    setTotal(atualizaEsquerda + direita)
  } 


  const handleCliqueDireita = () => {
    setTodos(todosOsCliques.concat('D'))
    const atualizaDireita = direita + 1
    setDireita(atualizaDireita)
    setTotal(esquerda + atualizaDireita)
  }

  return (
    <div>
      {esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <button onClick={handleCliqueDireita}>Direita</button>
      {direita}
      <p>{todosOsCliques.join(' ')}</p>
      <p>Total {total}</p>
    </div>
  )
}
export default App