import { useState } from 'react'
const Button = ({action, text})=>{
  return (
    <button onClick={action}>
      {text}
    </button>
  )

}
const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]

   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] =  useState(anecdotes.map(()=>0))
  console.log("Initial: ",vote)
  const [mostVote, setMostVotes] = useState(0)

  const randomSelect = () => {
    const randomNumber = parseInt(Math.random()*anecdotes.length)
    setSelected(randomNumber)
  }
  
  const voteSelect = () => {  
    const newVote = [...vote]
    newVote[selected]+=1
    setVote(newVote)

    if (newVote[selected]>vote[mostVote]){
      setMostVotes(selected)
    }
        
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {vote[selected]}</p>
      <div>
        <Button action={randomSelect} text="Next ANECDOTE"/>
        <Button action={voteSelect} text="Vote"/>
      </div>
      <h2>Anecdote with most votes</h2>
      <div> {anecdotes[mostVote]}</div>
    </div>
  )
}
export default App