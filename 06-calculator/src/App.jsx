import './App.css'
const numericButtonClasses = 'btn btn-info w-100'
const numericButtonClasses2 = 'btn btn-primary w-100'
const operatoButtonClasses3 = 'btn btn-warning w-100'
const specialButtonClasses4 = 'btn btn-secondary w-100'

function App() {

  return (
   <div>
    <h1>Calculator</h1>
    <hr />
    <table className='center'>
      <tbody>

        <tr>
          <td className='text-end' colSpan={4}>
            0
          </td>
        </tr>

        <tr>
        <td>
            <button type='button' className={specialButtonClasses4}>C</button>
          </td>
          <td>
            <button type='button' className={specialButtonClasses4}>{'<'}</button>
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
            <button type='button' className={numericButtonClasses}>7</button>
          </td>
          <td>
            <button type='button' className={numericButtonClasses}>8</button>
          </td>
          <td>
            <button type='button' className={numericButtonClasses}>9</button>
          </td>
          <td>
            <button type='button' className={operatoButtonClasses3}>x</button>
          </td>
        </tr>
        
        <tr>
        <td>
            <button type='button' className={numericButtonClasses}>4</button>
          </td>
          <td>
            <button type='button' className={numericButtonClasses}>5</button>
          </td>
          <td>
            <button type='button' className={numericButtonClasses}>6</button>
          </td>
          <td>
            <button type='button' className={operatoButtonClasses3}>-</button>
          </td>
        </tr>
        
        <tr>
        <td>
            <button type='button' className={numericButtonClasses}>1</button>
          </td>
          <td>
            <button type='button' className={numericButtonClasses}>2</button>
          </td>
          <td>
            <button type='button' className={numericButtonClasses}>3</button>
          </td>
          <td>
            <button type='button' className={operatoButtonClasses3}>+</button>
          </td>
        </tr>
        
        <tr>
          <td colSpan={2}>
            <button type='button' className={numericButtonClasses2}>0</button>
          </td>
          <td>
            <button type='button' className={numericButtonClasses2}>.</button>
          </td>
          <td>
            <button type='button' className={specialButtonClasses4}>=</button>
          </td>
        </tr>

      </tbody>
    </table>
   </div>
  )
}

export default App
