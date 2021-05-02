import React, { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Form from './components/Form'
import Search from './components/Search'
import axios from 'axios'

const App = () => {
    
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    const compare = persons.filter(persons => personObject.name === persons.name)

    if (compare.length !== 0) {
        window.alert(`${newName} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
    }

    else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }


  const handleSearchChange = (event) => setNewSearch(event.target.value)
  const handlePersonChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Search newSearch={newSearch} handleSearchChange={handleSearchChange}/>
      <h3>Add new number</h3>
      <Form addPerson={addPerson} newName={newName} newNumber={newNumber} handlePersonChange={handlePersonChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newSearch={newSearch} />
    </div>
  )

}

export default App