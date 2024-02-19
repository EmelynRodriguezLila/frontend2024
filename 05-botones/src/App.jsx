//STATE investigar react vairables globales que son monitoreadas
//HOOK investigar
//On es para mandar a llamar 

import { useState } from "react"


//let cuenta=0

function App() {

  const [cuenta, setCuenta] = useState(0) 

  const handleButtonIncrementar = () => {
     setCuenta(cuenta+1)
  }

  //const handleButtonDecrementar = () => {
   // setCuenta(cuenta-1)
 //}

 const handleButtonReinicio = () => {
  setCuenta(0)
}

  return (
      <div>
        <h1>Contador</h1>
        <hr/>
        <h2>{cuenta}</h2>
        <button onClick={handleButtonIncrementar}>Incrementar</button>
        <button onClick={() => setCuenta(cuenta-1)}>Decrementar</button>
        <button onClick={handleButtonReinicio}>Reinicio</button>

      </div>
  )
}

export default App
