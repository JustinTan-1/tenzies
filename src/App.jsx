import Dice from "./components/Dice"
import React from 'react'
import { nanoid } from 'nanoid'


function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const randomNums = []
    for (let i = 0; i<10; i++) {
      randomNums.push(generateDie())
    }
    return randomNums
  }

  function generateDie() {
    let num = Math.ceil(Math.random() * 6)
    return {value:num,isHeld:false,id:nanoid()}
  }
  
  function handleRoll() {
    setDice((oldDice) => oldDice.map((die) => die.isHeld ? {...die} : generateDie()))
  }

  function holdDice(id) {
    setDice((oldDice) => oldDice.map((die) => die.id == id? {...die, isHeld: !die.isHeld} : {...die}))
  }  
  const diceNums = dice.map((die) => {
    return ( <Dice value={die.value} isToggled={die.isHeld} key={die.id} toggle={() => holdDice(die.id)}/>)
  })
  return (
    <main className="main">
      <div className="main--container">
        <div className="dice--container">
          {diceNums}
        </div>
        <button className="roll" onClick={handleRoll}>Roll</button>
      </div>
    </main>
  )
}

export default App
