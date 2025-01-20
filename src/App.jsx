import { Calculator } from "./Calculator"
import { CalculatorButtons } from "./CalculatorButtons"
import { CalculatorItems } from "./CalculatorItems"
import { CalculatorScreen } from "./CalculatorScreen"
import  React  from 'react'
import './App.css'

function App() {
  const [showNumbers, setShowNumbers] = React.useState(['0'])

  function separarNumerosYSimbolos(array) {
    let resultado = [];

    array.forEach(item => {
        // Usamos una expresión regular para separar números y operadores
        let partes = item.match(/(\d+|[+\-*/])/g);
        if (partes) {
            resultado.push(...partes); // Agregamos todas las partes al array resultado
        }
    });

    return resultado;
}
  const resultNumbers = () => {
    const arraySeparado = separarNumerosYSimbolos(showNumbers)
    const expression = arraySeparado.join(' ')
    if(arraySeparado.length >= 3){
      return eval(expression)
    } else {
      return showNumbers
    }

  }

  const deleteAllNumbers = () => {
    const deleteAllNumbers = ['0']
    return deleteAllNumbers
  }
  return (  
    <Calculator>   
      <CalculatorScreen showNumbers={showNumbers}/>

      <CalculatorButtons >
        <CalculatorItems deleteAllNumbers={deleteAllNumbers} calculatorKey="AC" className="calculator-ac"/>
        <CalculatorItems calculatorKey="DE"className="calculator-de" />
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="." className="calculator-dot"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="/" className="calculator-split"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="7" className="calculator-seven"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="8" className="calculator-eight"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="9" className="calculator-nine"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="*" className="calculator-multiply"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="4" className="calculator-four"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="5" className="calculator-five"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="6" className="calculator-six"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="-" className="calculator-substract"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="1" className="calculator-one"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="2" className="calculator-two" />
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="3" className="calculator-three" />
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="+" className="calculator-sum"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="00" className="calculator-double--cero"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} calculatorKey="0" className="calculator-cero"/>
        <CalculatorItems showNumbers={showNumbers} setShowNumbers={setShowNumbers} resultNumbers={resultNumbers} calculatorKey="=" className="calculator-equal" />
      </CalculatorButtons>
      
    </Calculator>
  )
}

export default App
