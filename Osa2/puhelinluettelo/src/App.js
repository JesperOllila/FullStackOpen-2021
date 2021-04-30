import React, { useState } from 'react'

const Person = (props) => {
  return (
  <p>{props.person.name} {props.person.number}</p>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', 
      number: '066 054 6452'
      }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')


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
  

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <p>Name</p>
          <input name="Nimi"
            value={newName}
            onChange={handlePersonChange} 
          />
        </div>
        <div>
          <p>Phone number</p>
          <input 
            value={newNumber}
            onChange={handleNumberChange} 
          />
        </div>
        <br></br>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(persons =>
          <Person key={persons.name} person={persons} number={persons} />
          )}
      </div>
    </div>
  )

}

export default App