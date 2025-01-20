import './calculator-items.css'

function CalculatorItems({ calculatorKey, className, showNumbers, setShowNumbers, resultNumbers, deleteAllNumbers }) {
    return (
        <li className={'calculator-button--container' + " " +  className}>
            <button onClick={() => {
                if(showNumbers[0] === '0'){
                    setShowNumbers([calculatorKey]) 
                } else if(resultNumbers) {
                    showNumbers = resultNumbers()
                    setShowNumbers([showNumbers])
                } else if(deleteAllNumbers) {
                    setShowNumbers(deleteAllNumbers())
                } else {
                    showNumbers += calculatorKey
                    setShowNumbers([showNumbers])
                }
               
            }} className='calculator-button'>{calculatorKey}</button>
        </li>
    )
}

export { CalculatorItems }
