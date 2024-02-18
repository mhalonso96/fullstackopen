const Filter = ({search, handleSearchChange, handleFilterClick}) => {
    return (
        <div className="name">
            Filter shown with: <input value={search} onChange={handleSearchChange}/>
            <button onClick={handleFilterClick}>Search</button>
        </div>
      
    )
  }
export default Filter