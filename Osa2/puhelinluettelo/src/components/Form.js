import React from 'react'

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

export default Form