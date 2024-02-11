const PersonForm = ({addPersons, newName, handleNameChange, newNumber, handleNumberChange})=>{
    return (
        <form onSubmit={addPersons}>
        <div>
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