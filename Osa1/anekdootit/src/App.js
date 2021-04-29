import React, { useState } from 'react'

const Button = (props) => (
  <p>
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  </p>
)

const MostVoted = ({anecdotes, vote}) => {
  
  //etsitään korkein arvo vote-arraysta ja asetetaan muuttujaan
  const maxvote = Math.max.apply(null, vote)

  //sijoitetaan korkein arvo, jolloin saadaan sen sijainti ja asetetaan muuttujaan
  const maxvoteselected = vote.indexOf(Math.max.apply(null, vote))

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxvoteselected]}</p>
      <p>has {maxvote} votes</p>
    </div>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState ([0, 0, 0, 0, 0, 0])


  const handleNext = () => setSelected(Math.floor((Math.random() * anecdotes.length)))


  const handleVote = () => {
    const copy = [...vote]
    copy[selected] += 1
  
    setVote(copy)

  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <Button text="vote" handleClick={handleVote} />
      <Button text="next anecdote" handleClick={handleNext}/>
      <MostVoted vote={vote} anecdotes={anecdotes} />
    </div>
    
  )
}

export default App