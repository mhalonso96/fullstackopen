import { useEffect, useState } from 'react'
import Name from "./components/name"
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Msg from './components/msg'
import PersonService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [search, setSearch] = useState('')
  const [useFilter, setUseFilter] = useState([])
  const personService = new PersonService()

  useEffect(()=>{
    personService.getAll()
      .then(res=>{
        setPersons(res)
      }) // eslint-disable-next-line 
  },[])
  
  const addPersons = (event) =>{
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber, 
      }
    const idChange = persons.find(person=>person.name.toLowerCase()===newName.toLowerCase())
    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old Number ${idChange.number} with a new one ${newNumber}`)){
        
        personService.update(idChange.id, personObject)
          .then(res=>
            setPersons(persons.map(person => person.id !== idChange.id ? person : res)))
            setNewName('')
            setNewNumber('')
      }
      else{
        setNewName('')
        setNewNumber('')
        return
      }
      
    }
    else{
      personService.create(personObject)
      .then(res=>{
        setPersons(persons.concat(res));
        setNewName('')
        setNewNumber('')
        handleFilterClick()
      }) 
    }
    
  }
  
  const deletePerson = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      personService.delete(id)
        .then(res=>{
          setPersons(persons.filter(person=>person.id !== id ? person : res))
          personService.getAll().then(res=>setPersons(res))
        })
        .catch(error => {
         console.error('Error deleting contact:', error);
        })
    }
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
  //  const filteredPersons = persons.filter((person) => {
  //    return search === '' ? person : person.name.toLowerCase().includes(search.toLowerCase());
  //  });

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
            <Name key={person.id} person={person} deletePerson={()=>deletePerson(person.id)} />)
          })) 
        : (<Msg/>)
      }
      </ul>
    </div>
  )
}

export default App