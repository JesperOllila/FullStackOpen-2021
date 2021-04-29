import React from 'react'


const Course = (props) => {
  return (
    <div>
      <Header coursename={props.coursename} />
      <Content parts={props.parts}/>
      <Total parts={props.parts} />
    </div>
  )
}




const Header = (props) => {
  return (
    <div>
      <h1>{props.coursename}</h1>
    </div>
  )
}

const Content = (props) => {
  
  let Content = props.parts.map(value => (
    <div key={value["id"]}>
    <Part name={value["name"]} exercises={value["exercises"]} />
    </div>
  ))

  return (
    <div>
      {Content}
    </div>
  )
}


const Part = (props) => {
  
  return (
    <p>{props.name + " " + props.exercises}</p>
  )
}

 const Total = (props) => {
  const total = Object.values(props.parts).reduce((s, {exercises}) => s + exercises, 0)
  
    return (
      <p>
      Number of exercises {total}
      </p>
    )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course coursename={course.name} parts={course.parts}/>
    </div>
  )
}

export default App