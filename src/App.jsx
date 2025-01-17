import { Calculator } from "./Calculator"
import { CalculatorButtons } from "./CalculatorButtons"
import { CalculatorItems } from "./CalculatorItems"
import { CalculatorScreen } from "./CalculatorScreen"
import  React  from 'react'
import './App.css'

function App() {
  const [showNumbers, setShowNumbers] = React.useState(0)
  return (
    <Calculator>   
      <CalculatorScreen showNumbers={showNumbers}/>

      <CalculatorButtons >
        <CalculatorItems calculatorKey="AC" className="calculator-ac"/>
        <CalculatorItems calculatorKey="DE"className="calculator-de" />
        <CalculatorItems calculatorKey="." className="calculator-dot"/>
        <CalculatorItems calculatorKey="/" className="calculator-split"/>
        <CalculatorItems calculatorKey="7" className="calculator-seven"/>
        <CalculatorItems calculatorKey="8" className="calculator-eight"/>
        <CalculatorItems calculatorKey="9" className="calculator-nine"/>
        <CalculatorItems calculatorKey="*" className="calculator-multiply"/>
        <CalculatorItems calculatorKey="4" className="calculator-four"/>
        <CalculatorItems calculatorKey="5" className="calculator-five"/>
        <CalculatorItems calculatorKey="6" className="calculator-six"/>
        <CalculatorItems calculatorKey="-" className="calculator-substract"/>
        <CalculatorItems calculatorKey="1" className="calculator-one"/>
        <CalculatorItems calculatorKey="2" className="calculator-two" />
        <CalculatorItems calculatorKey="3" className="calculator-three" />
        <CalculatorItems calculatorKey="+" className="calculator-sum"/>
        <CalculatorItems calculatorKey="00" className="calculator-double--cero"/>
        <CalculatorItems calculatorKey="0" className="calculator-cero"/>
        <CalculatorItems calculatorKey="=" className="calculator-equal" />
      </CalculatorButtons>
      
    </Calculator>
  )
}

export default App
