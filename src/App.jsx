import { Calculator } from "./Calculator"
import { CalculatorButtons } from "./CalculatorButtons"
import { CalculatorItems } from "./CalculatorItems"
import { CalculatorScreen } from "./CalculatorScreen"
import './App.css'

function App() {
  return (
    <Calculator>   
      <CalculatorScreen />
      <CalculatorButtons >
        <CalculatorItems />
      </CalculatorButtons>
    </Calculator>
  )
}

export default App
