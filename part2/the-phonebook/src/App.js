import { useEffect, useState } from 'react'
import Name from "./components/name"
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Msg from './components/msg'
import axios from'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [search, setSearch] = useState('')
  const [useFilter, setUseFilter] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
      .then(res=>{
        setPersons(res.data)
      })
  },[])
  
  const addPersons = (event) =>{
    event.preventDefault();
  
    if (persons.some(person =>person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName('')
      setNewNumber('')
      return
    }
    setPersons([...persons, { name: newName, number: newNumber, id:Math.floor(Math.random() * 1000000)}]);
    setNewName('')
    setNewNumber('')
  }
  
  
  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event)=>{
    setSearch(event.target.value)
    
  }
  // const filteredPersons = persons.filter((person) => {
  //   return search === '' ? person : person.name.toLowerCase().includes(search.toLowerCase());
  // });

  const handleFilterClick = () => {
    const filtered = persons.filter(person =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setUseFilter(filtered);
  };
 
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter search={search} handleSearchChange={handleSearchChange} handleFilterClick={handleFilterClick}/>
      <h2>Add a new</h2>
        <PersonForm addPersons={addPersons} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <ul>
      {useFilter.length > 0 ? (
        useFilter.map((person) => {
          return (
            <Name key={person.id} person={person} />)
          })) 
        : (<Msg/>)
      }
      </ul>
    </div>
  )
}

export default App