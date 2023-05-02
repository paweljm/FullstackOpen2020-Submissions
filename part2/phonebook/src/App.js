import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    persons.some(person => person.name === newName) ? alert(`${newName} is already added to phonebook`) : setPersons([...persons, { name: newName, number: newNumber }])
    setNewName('')
    setNewNumber('')
  }

  const handleSearch = (event) => {
   setSearch((event.target.value).toLowerCase())
   console.log(search) 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input onChange={handleSearch} /> </div>
      <form>
        <div> name: <input onChange={handleNameChange} value={newName} /> </div>
        <div> number: <input onChange={handleNumberChange} value={newNumber} /> </div>
        <div>
          <button onClick={addName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => ((person.name).toLowerCase()).includes(search)).map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App