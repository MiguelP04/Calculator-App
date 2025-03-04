import './calculator-screen.css'

function CalculatorScreen({ showNumbers}) {
    return (
        <div className="calculator-screen--container">
            <p className="calculator-screen--text">{showNumbers}</p>
        </div>
    )
}

export { CalculatorScreen }
