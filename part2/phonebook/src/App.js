import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState()
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationType, setNotificationType] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        console.log(initialPersons)
        setPersons(initialPersons)
      })
  }, [])

  const deletePerson = (id, name) => {
    console.log(id,name)
    if(window.confirm(`Delete ${name} ?`)){
      personsService
      .deleteItem(id)
      .then(setPersons(persons.filter(person => person.id != id)))
      .catch(error => {
        setErrorMessage(
          `Information of ${name} has already been deleted from the server`
        )
        setNotificationType('error')
        setTimeout(() => {
          setErrorMessage(null)
          setNotificationType('')
        }, 5000)
      })
    }
  }

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
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        personsService
          .update(persons.find(person => person.name == newName).id, newPerson)
          .then(returnedPerson => {
            setErrorMessage(
              `Updated ${returnedPerson.name}`
            )
            setNotificationType('success')
            setTimeout(() => {
              setErrorMessage(null)
              setNotificationType('')
            }, 5000)
            console.log(returnedPerson)
            setPersons(persons.map(person => person.id == returnedPerson.id ? returnedPerson : person))
          })
      }
    }
    else{
      personsService
        .create(newPerson)
        .then(returnedPerson => {
          console.log(returnedPerson)
          setErrorMessage(
            `Added ${returnedPerson.name}`
          )
          setNotificationType('success')
          setTimeout(() => {
            setErrorMessage(null)
            setNotificationType('')
          }, 5000)
          setPersons([...persons, { name: returnedPerson.name, number: returnedPerson.number, id: returnedPerson.id }])        
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
      <Notification message={errorMessage} type={notificationType} />
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
      <Persons 
        persons={persons} 
        search={search}
        deleteHandler={deletePerson}
      />
    </div>
  )
}

export default App