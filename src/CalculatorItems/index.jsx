import './calculator-items.css';

function CalculatorItems({ calculatorKey, className, showNumbers, setShowNumbers, resultNumbers, recordOperations, setRecordOperations, separateArray }) {
    const handleClick = () => {
        let newShowNumbers;

        switch (calculatorKey) {
            case "AC":
                newShowNumbers = '0';
                break;
            case "DE":
                newShowNumbers = showNumbers.length > 1 ? showNumbers.slice(0, -1) : '0';
                break;
            case "=":
                
                newShowNumbers = resultNumbers();
                if(resultNumbers() == "Error" || separateArray.length == 1 || separateArray.length == 2){
                    console.log("Error")
                } else{
                    setRecordOperations([...recordOperations, showNumbers + " = " + resultNumbers()])
                }
                break;

            default:
                newShowNumbers = showNumbers === '0' || showNumbers === 'Error' ? calculatorKey : showNumbers + calculatorKey;
        }

        setShowNumbers(newShowNumbers);
    };

    return (
        <li className={`calculator-button--container ${className}`}>
            <button onClick={handleClick} className='calculator-button'>
                {calculatorKey}
            </button>
        </li>
    );
}

export { CalculatorItems };
