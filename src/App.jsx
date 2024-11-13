import Dice from "./components/Dice"
import React from 'react'

function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const randomNums = []
    for (let i = 0; i<10; i++) {
      let num = Math.ceil(Math.random() * 6)
      randomNums.push({value:num,isHeld:false})
    }
    return randomNums
  }
  
  function handleRoll() {
    setDice(allNewDice())
  }

  const diceNums = dice.map((die) => {
    return ( <Dice value={die.value}/>)
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
