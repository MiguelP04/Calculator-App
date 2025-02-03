import React from 'react';
import { Calculator } from "./Calculator";
import { CalculatorButtons } from "./CalculatorButtons";
import { CalculatorItems } from "./CalculatorItems";
import { CalculatorScreen } from "./CalculatorScreen";
import './App.css';
import { create, all } from 'mathjs';

const math = create(all);

function App() {
  const [showNumbers, setShowNumbers] = React.useState('0');

  const separarNumerosYSimbolos = (input) => {
    return input.match(/(\d+|[+\-*/])/g) || [];
  };

  const resultNumbers = () => {
    const arraySeparado = separarNumerosYSimbolos(showNumbers);
    console.log(arraySeparado)
    const expression = arraySeparado.join(' ');
    if (arraySeparado.length >= 3) {
      try {
        return math.evaluate(expression).toString();
      } catch (error) {
        console.error("Error al evaluar la expresión:", error);
        return "Error";
      }
    }
    return showNumbers;
  };

  return (
    <Calculator>
      <CalculatorScreen showNumbers={showNumbers} />
      <CalculatorButtons>
        {["AC", "DE", ".", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", "="].map((key) => (
          <CalculatorItems
            key={key}
            calculatorKey={key}
            showNumbers={showNumbers}
            setShowNumbers={setShowNumbers}
            resultNumbers={resultNumbers}
            className={`calculator-${key.toLowerCase()}`}
          />
        ))}
      </CalculatorButtons>
    </Calculator>
  );
}

export default App;
