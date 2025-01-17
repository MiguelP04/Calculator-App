import './calculator-buttons.css'

function CalculatorButtons({ children }) {
    return (
        <ul className="calculator-buttons--container">
            {children}
        </ul>            
    )
}

export { CalculatorButtons }
