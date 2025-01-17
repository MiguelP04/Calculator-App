import './calculator-items.css'

function CalculatorItems({ calculatorKey, className }) {
    return (
        <li className={'calculator-button--container' + " " +  className}>
            <button className='calculator-button'>{calculatorKey}</button>
        </li>
    )
}

export { CalculatorItems }
