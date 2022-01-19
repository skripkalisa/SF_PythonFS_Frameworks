import React, { useEffect } from 'react'
import useState from 'react-usestateref'
import '../styles/styl/calc.styl'
import CalcOutput from './CalcOutput'
import CalcButton from './CalcButton'

function Calculator(props: any) {
  const initialState = {
    num: '',
    result: '',
    oper: '',
    expr: '',
    display: '',
  }
  const [calc, setCalc, calcRef] = useState(initialState)
  const digits = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.']
  const operators = {
    BS: '\u2190',
    C: 'C',
    '+': '+',
    '-': '−',
    '*': '×',
    '/': '÷',
    '%': '%',
    '=': '=',
  }
  const utils = {}
  function calculate() {
    let a = parseFloat(calcRef.current.result)
    let b = parseFloat(calcRef.current.num)

    let res = 0
    switch (calc.oper) {
      case operators['+']:
        res = a + b
        break
      case operators['-']:
        res = a - b
        break
      case operators['*']:
        res = a * b
        break
      case operators['/']:
        res = a / b
        break
      case operators['%']:
        res = a % b
        break
      case operators['=']:
        return
      case operators['C']:
        return
      default:
        console.log('illegal operator')
        break
    }

    setCalc({ ...calcRef.current, num: '' })

    if (calc.oper !== '=' || calc.oper !== operators.C)
      setCalc({ ...calcRef.current, expr: a + calc.oper + b + '=' + res })

    setCalc({ ...calcRef.current, result: res.toString() })
    updateDisplay()
  }

  function editDisplay() {
    if (digits.includes(calc.display.slice(-1)))
      setCalc({ ...calcRef.current, num: calc.num.slice(0, -1) })
    else setCalc({ ...calcRef.current, oper: '' })
    updateDisplay()
  }

  function updateDisplay() {
    if (calcRef.current.oper !== '=')
      setCalc({
        ...calcRef.current,
        display:
          calcRef.current.result +
          (calcRef.current.oper == '=' ? calc.oper : calcRef.current.oper) +
          calcRef.current.num,
      })
    else
      setCalc({
        ...calcRef.current,
        display: calcRef.current.num
          ? calcRef.current.num
          : calcRef.current.result,
      })
  }

  function updateNum(val: string) {
    if (val === '.' && calc.num.includes('.')) return
    if (calcRef.current.oper === '=') setCalc({ ...calc, result: '' })

    setCalc({ ...calcRef.current, num: calc.num + val })
    updateDisplay()
  }

  function updateOper(val: string) {
    if (Object.values(operators).includes(calc.display.slice(-1))) return

    setCalc({ ...calcRef.current, oper: val })

    if (calcRef.current.num !== '' && calcRef.current.result !== '') {
      calculate()
    } else if (calcRef.current.result !== '' && calcRef.current.num === '') {
      updateDisplay()
    } else {
      setCalc({ ...calcRef.current, result: calc.num })
      setCalc({ ...calcRef.current, num: '' })

      updateDisplay()
    }
  }

  function reset() {
    setCalc({ ...initialState })
  }

  function btnClick(e: any) {
    const val = e.target.textContent
    const ds = e.target.dataset.set

    if (digits.includes(val)) {
      updateNum(val)
    } else if (val === operators.BS) editDisplay()
    else if (val === operators.C) reset()
    else updateOper(val)
  }
  return (
    <>
      <div className="calculator">
        <div className="display">
          <CalcOutput display={calc.display || '0'} expr={calc.expr} />
        </div>
        <div className="buttons">
          <div className="digits">
            {digits.map(digit => (
              <CalcButton
                key={digit}
                label={digit}
                cls="num"
                handler={btnClick}
              />
            ))}
          </div>
          <div className="operators">
            {Object.entries(operators).map(operator => (
              <CalcButton
                key={operator[0]}
                label={operator[1]}
                cls="oper"
                handler={btnClick}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Calculator
