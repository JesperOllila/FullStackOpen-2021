import React, { useState } from 'react'

const Person = (props) => {
  return (
  <p>{props.person.name}</p>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    
    const compare = persons.filter(persons => personObject.name === persons.name)

    if (compare.length !== 0) {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
    }
    else {
    setPersons(persons.concat(personObject))
    setNewName('')
    }
  }
  

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <input 
            value={newName}
            onChange={handlePersonChange} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <Person key={person.name} person={person} />
          )}
      </div>
    </div>
  )

}

export default App