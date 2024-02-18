const Name = ({person, deletePerson}) => {
    return (
      <div >
        <li className="name">{person.name} {person.number}</li>
        <button onClick={deletePerson}>Delete</button>
      </div>
      
      
      
    )
  }
export default Name