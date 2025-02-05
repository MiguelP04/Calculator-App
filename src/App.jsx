import React from 'react';
import { Calculator } from "./Calculator";
import { CalculatorButtons } from "./CalculatorButtons";
import { CalculatorItems } from "./CalculatorItems";
import { CalculatorScreen } from "./CalculatorScreen";
import { Record } from "./Record"
import './App.css';
import { create, all } from 'mathjs';

const math = create(all);

function App() {
  const [showNumbers, setShowNumbers] = React.useState('0');
  const [recordOperations, setRecordOperations] = React.useState([])
  const separateNumbersAndSymbols = (input) => {
    return input.match(/(\d+(\.\d+)?|[+\-*/])/g) || [];
  };

  const separateArray = separateNumbersAndSymbols(showNumbers);
  const expression = separateArray.join(' ');

  const resultNumbers = () => {
    if (separateArray.length >= 3) {
      try {
        return math.evaluate(expression).toString();
      } catch (error) {
        console.error("Error al evaluar la expresión:", error);
        return "Error";
      }
    }
    return showNumbers;
  };

  const characters = ["AC", "DE", ".", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", "="]

  return (
    <>
      <Record 
        recordOperations={recordOperations}
        expression={expression}
      />

      <Calculator>
          
        <CalculatorScreen showNumbers={showNumbers} />
        <CalculatorButtons>
          {characters.map((key) => (
            <CalculatorItems
              key={key}
              calculatorKey={key}
              showNumbers={showNumbers}
              setShowNumbers={setShowNumbers}
              resultNumbers={resultNumbers}
              recordOperations={recordOperations}
              setRecordOperations={setRecordOperations}
              separateArray={separateArray}
              className={`calculator-${key.toLowerCase()}`}
            />
          ))}
        </CalculatorButtons>

        
      </Calculator>
      
    </>



  );
}

export default App;
