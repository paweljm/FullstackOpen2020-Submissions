const PersonForm = ({handleNameChange, handleNumberChange, newName, newNumber, submitHandler}) => {
    return (
      <form>
        <div> name: <input onChange={handleNameChange} value={newName} /> </div>
        <div> number: <input onChange={handleNumberChange} value={newNumber} /> </div>
        <div>
          <button onClick={submitHandler} type="submit">add</button>
        </div>
      </form>
    )
  }

export default PersonForm