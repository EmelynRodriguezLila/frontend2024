import { useState } from 'react'
import './App.css'
const numericButtonClasses = 'btn btn-info w-100'
const numericButtonClasses2 = 'btn btn-primary w-100'
const operatoButtonClasses3 = 'btn btn-warning w-100'
const specialButtonClasses4 = 'btn btn-secondary w-100'

function App() {
    //FUNCION STATE
    const [display, setDisplay] = useState({
      value: '0',
      //ESTABLECER ATRIBUTO DONDE GUARDAR EL OPERADOR
      operator:'',
      previosValue:'0',
      hasPoint: false

    })

    //FUNCION
    const updateDisplay = (value) => {
      if(value==='.'){
        if(display.hasPoint){
        return
        }

        setDisplay({
          ...display,
        value: display.value + value,
        hasPoint:true
      })
      return
      }

      if(display.value==='0'){
        setDisplay({
          ...display,
          value
        })
        return
      }
      setDisplay({
        ...display,
        value: display.value + value
      })
    }
    //FUNCION PARA BORRAR TODO
    const clearDisplay = () => {
      setDisplay({
        ...display,
        value: '0',
        hasPoint:false
      })
    }
    //FUNCION PARA QUE BORRE SOLO EL ULTIMO DIGITO
    const deleteLastCharacter = () => {
      setDisplay({
        ...display,
        value: display.value.slice(0,-1)
      })
    }
    //nuevo
    const setOperator = (operator) => {
      setDisplay({
        ...display,
        operator,
        previosValue: display.value,
        value:'0',
        hasPoint:false
      })
    }

    const calculate = () => {
      if(display.operator === ''){
        return
      }
      const result = eval(display.previosValue+display.operator+display.value)
      setDisplay({
        ...display,
        value:result,
        operator:'',
        previosValue:'0'
      })
    }

//react developer tools
  return (
   <div>
    <h1>Calculator</h1>
    <hr />
    <table className='center'>
      <tbody>

        <tr>
          <td className='text-end' colSpan={4}>
            <h2>{display.value}</h2>
          </td>
        </tr>

        <tr>
        <td>
            <button type='button' 
            className={specialButtonClasses4}
            onClick={clearDisplay}>C</button>
          </td>
          <td>
            <button type='button' 
            className={specialButtonClasses4}
            onClick={deleteLastCharacter}>{'<'}</button>
          </td>
          <td>
            <button type='button' className={operatoButtonClasses3}>%</button>
          </td>
          <td>
            <button type='button' className={operatoButtonClasses3}>/</button>
          </td>
        </tr>
        
        <tr>
        <td>
            <button type='button' 
            className={numericButtonClasses} 
            onClick={() => updateDisplay('7')}>7</button>
          </td>
          <td>
            <button type='button' 
            className={numericButtonClasses}
            onClick={() => updateDisplay('8')}>8</button>
          </td>
          <td>
            <button type='button' 
            className={numericButtonClasses}
            onClick={() => updateDisplay('9')}>9</button>
          </td>
          <td>
            <button type='button' 
            className={operatoButtonClasses3}
            >x</button>
          </td>
        </tr>
        
        <tr>
        <td>
            <button type='button' 
            className={numericButtonClasses}
            onClick={() => updateDisplay('4')}>4</button>
          </td>
          <td>
            <button type='button' 
            className={numericButtonClasses}
            onClick={() => updateDisplay('5')}>5</button>
          </td>
          <td>
            <button type='button' 
            className={numericButtonClasses}
            onClick={() => updateDisplay('6')}>6</button>
          </td>
          <td>
            <button type='button' className={operatoButtonClasses3}>-</button>
          </td>
        </tr>
        
        <tr>
        <td>
            <button type='button' 
            className={numericButtonClasses}
            onClick={() => updateDisplay('1')}>1</button>
          </td>
          <td>
            <button type='button' 
            className={numericButtonClasses}
            onClick={() => updateDisplay('2')}>2</button>
          </td>
          <td>
            <button type='button' className={numericButtonClasses}
            onClick={() => updateDisplay('3')}>3</button>
          </td>
          <td>
            <button type='button' 
            className={operatoButtonClasses3}
            onClick={()=>setOperator('+')}>+</button>
          </td>
        </tr>
        
        <tr>
          <td colSpan={2}>
            <button type='button' 
            className={numericButtonClasses2}
            onClick={() => updateDisplay('0')}>0</button>
          </td>
          <td>
            <button type='button' 
            className={numericButtonClasses2}
            onClick={() => updateDisplay('.')}>.</button>
          </td>
          <td>
            <button type='button' 
            className={specialButtonClasses4}
            onClick={calculate}>=</button>
          </td>
        </tr>

      </tbody>
    </table>
   </div>
  )
}

export default App
