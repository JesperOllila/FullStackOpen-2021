import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  
  let Content = props.parts.map(value => (
    <p>{value["name"] + " " + value["exercises"]}</p>)
    )

  return (
    <div>
      {Content}
    </div>
  )
}


const Total = (props) => {
  let Total = 0;
  props.parts.forEach(value => (
    Total +=  value["exercises"]
  ))
    
    return (
      <p>
      Number of exercises {Total}
      </p>
    )
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]



  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App