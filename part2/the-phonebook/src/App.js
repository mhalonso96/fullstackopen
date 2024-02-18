import { useEffect, useState } from 'react'
import Name from "./components/name"
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Msg from './components/msg'
import PersonService from './services/personService'
import Notification from './components/notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [typeMessage, setTypeMessage] = useState('')

  const [search, setSearch] = useState('')
  const [useFilter, setUseFilter] = useState([])
  const personService = new PersonService()

  useEffect(()=>{
    personService.getAll()
      .then(res=>{
        setPersons(res)
      }) 
      .catch(error => {
        setTypeMessage('error')
        setErrorMessage(
          `'${error}' in initialize`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
       
      })// eslint-disable-next-line
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
          .then(res=>{
            setPersons(persons.map(person => person.id !== idChange.id ? person : res))
            setTypeMessage('success')
            setErrorMessage(
              `'${idChange.name}' was already update in server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setNewName('')
            setNewNumber('')

          })
          .catch(error => {
            setTypeMessage('error')
            setErrorMessage(`'${error}' in update`)
            setTimeout(() => {setErrorMessage(null)}, 5000)})
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
        setTypeMessage('success')
        setErrorMessage(
          `'${res.name}' was already added in server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
       // setPersons(persons.filter(n => n.id !== res.id))
      })
      .catch(error => {
        setTypeMessage('error')
        setErrorMessage(
          `'${error}' in add`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
       
      })  
    }
  }
  
  const deletePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id);
    if (!personToDelete){
      setTypeMessage('error')
      setErrorMessage(`Error - realize a busca novamente.`);
      return
    }; // Verifica se a pessoa existe na lista
  
    if (window.confirm(`Tem certeza que deseja excluir ${personToDelete.name}?`)) {
      personService.delete(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setTypeMessage('success')
          setErrorMessage(`'${personToDelete.name}' was already removed from server`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        })
        .catch(error => {
          setTypeMessage('error')
          setErrorMessage(`'${error}' in delete`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
    }
  };
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
      <Notification message={errorMessage} type={typeMessage} />
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