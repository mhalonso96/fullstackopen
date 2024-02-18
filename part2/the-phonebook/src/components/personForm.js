const PersonForm = ({addPersons, newName, handleNameChange, newNumber, handleNumberChange})=>{
    return (
        <form onSubmit={addPersons} className="person">
        <div className="name">
          <div>
            Name: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            Number: <input value={newNumber} onChange={handleNumberChange}/>
            <button type="submit">Add</button>
          </div>
        
        </div>
      </form>
    )
}
export default PersonForm