import React from 'react'

const Search = (props) => {
  
    return (
        <input value={props.newSearch} onChange={props.handleSearchChange}/>
    )
}
  
export default Search 
  
  