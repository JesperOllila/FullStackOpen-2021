import React, { useState } from 'react'

const Search = (props) => {
  
  return (
    <input value={props.newSearch} onChange={props.handleSearchChange}/>
  )
}

const Form = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <div>
        <p>Name</p>
        <input name="Nimi"
          value={props.newName}
          onChange={props.handlePersonChange} 
        />
      </div>
      <div>
        <p>Phone number</p>
        <input 
          value={props.newNumber}
          onChange={props.handleNumberChange} 
        />
      </div>
      <br></br>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = (props) => {
  
  const FilterPersons = props.persons.filter((Person) => {
    let status = false;
    Object.values(Person).forEach((value) => {
    if(String(value).toLowerCase().indexOf(props.newSearch.toLowerCase()) > -1) {
      status = true
      return
      }
    })
    
    if(status) return Person
    
    return (null)
  })

  const Persons = (FilterPersons.map(persons =>
    <Person key={persons.name} person={persons}/>
  ))

  return (
  <div>
    {Persons}
  </div>
  )
}

const Person = (props) => {
  
  return (
  <p>{props.person.name} {props.person.number}</p>
  )
}


const App = () => {
    const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Ada Lovelace', number: '39-44-5323523' },
      { name: 'Dan Abramov', number: '12-43-234345' },
      { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

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

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
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
      <Search newSearch={newSearch} handleSearchChange={handleSearchChange}/>
      <h3>Add new number</h3>
      <Form addPerson={addPerson} newName={newName} newNumber={newNumber} handlePersonChange={handlePersonChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newSearch={newSearch} />
    </div>
  )

}

export default App