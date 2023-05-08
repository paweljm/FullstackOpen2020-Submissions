import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState()
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        console.log(initialPersons)
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = { 
      name: newName,
      number: newNumber 
    }
    console.log(newPerson)
    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      axios
      .post('http://localhost:3001/persons', newPerson)
      .then(response => {
        console.log(response.data)
        setPersons([...persons, { name: newName, number: newNumber }])        
        setNewName('')
        setNewNumber('')
      })
    }
    
  }

  const handleSearch = (event) => {
   setSearch((event.target.value).toLowerCase())
   console.log(search) 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter changeHandler={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        submitHandler={addPerson}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App