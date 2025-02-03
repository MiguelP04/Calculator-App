import './calculator-items.css';

function CalculatorItems({ calculatorKey, className, showNumbers, setShowNumbers, resultNumbers }) {
    const handleClick = () => {
        let newShowNumbers;

        console.log(showNumbers)
        switch (calculatorKey) {
            case "AC":
                newShowNumbers = '0';
                break;
            case "DE":
                newShowNumbers = showNumbers.length > 1 ? showNumbers.slice(0, -1) : '0';
                break;
            case "=":
                newShowNumbers = resultNumbers();
                break;
            default:
                newShowNumbers = showNumbers === '0' ? calculatorKey : showNumbers + calculatorKey;
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
