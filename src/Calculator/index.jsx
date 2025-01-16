import './calculator.css'

function Calculator({ children }) {
    return (
        <div className="calculator-container">
            {children}
        </div>
    )
}

export { Calculator }
