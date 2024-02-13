const Name = ({person, deletePerson}) => {
    return (
      <div>
        <li>{person.name} {person.number}</li>
        <button onClick={deletePerson}>Delete</button>
      </div>
      
      
      
    )
  }
export default Name