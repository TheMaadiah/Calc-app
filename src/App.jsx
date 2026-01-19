import { useState } from "react"
import "./Styles.css"

function App() {
  const [expression, setExpression] = useState("")

  const append = (value) => {
    setExpression(prev => prev + value)
  }

  const calculate = () => {
    try {
      setExpression(eval(expression).toString())
    } catch {
      setExpression("Error")
    }
  }

  const clearAll = () => {
    setExpression("")
  }

  const deleteOne = () => {
    setExpression(prev => prev.slice(0, -1))
  }

  return (
    <div className="container">
      <div className="show">
        <div className="previous-operand"></div>
        <div className="current-operand">
          {expression || "0"}
        </div>
      </div>

      <button className="box" onClick={clearAll}>AC</button>
      <button className="box" onClick={deleteOne}>C</button>
      <button className="box" onClick={() => append("%")}>%</button>
      <button onClick={() => append("/")}>÷</button>

      <button onClick={() => append("7")}>7</button>
      <button onClick={() => append("8")}>8</button>
      <button onClick={() => append("9")}>9</button>
      <button onClick={() => append("*")}>X</button>

      <button onClick={() => append("4")}>4</button>
      <button onClick={() => append("5")}>5</button>
      <button onClick={() => append("6")}>6</button>
      <button onClick={() => append("-")}>-</button>

      <button onClick={() => append("1")}>1</button>
      <button onClick={() => append("2")}>2</button>
      <button onClick={() => append("3")}>3</button>
      <button onClick={() => append("+")}>+</button>

      <button onClick={() => append("0")}>0</button>
      <button onClick={() => append(".")}>.</button>
      <button className="span-two" onClick={calculate}>=</button>
    </div>
  )
}

export default App;
