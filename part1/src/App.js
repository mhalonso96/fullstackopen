const App = () => {
  const amigos = [ 
      { nome: 'Peter', idade: 4 },
      { nome: 'Maya', idade: 10 },
      { nome: 'Marcelo', idade: 27 },
    ]

  return (
    <div>
      <p>{amigos[0].nome} {amigos[0].idade}</p>
      <p>{amigos[1].nome} {amigos[1].idade}</p>
      <p>{amigos[2].nome} {amigos[2].idade}</p>
    </div>
  )
}

export default App