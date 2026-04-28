import { useState } from 'react'

const Header =()=><h1> give feedback</h1>

const Button =({text,onClick})=>{
return(
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics =({good,neutral,bad}) =>{
  const all =good+neutral+bad
  if (all == 0){
    return(
      <div>No feedback given</div>
    )
  }
  const average =(good-bad)/all
  const positive = (good/all) *100
  
  return(
     <div>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {positive} %</p>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
 


  return (
    <div>
      <Header />
      <Button text="good" onClick={()=>setGood(good +1)}/>
      <Button text="neutral" onClick={()=>setNeutral(neutral+1)}/>
      <Button text="bad" onClick={()=>setBad(bad+1)}/>

        
        <Statistics good ={good} neutral ={neutral} bad ={bad} />
    </div>
  )
}

export default App