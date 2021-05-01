import React from 'react'
import Person from './Person.js'

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

export default Persons