import { useState } from 'react'
import { Estadistica } from './Grafica'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen'>
      <h1 className='text-center font-bold text-5xl'>Estadisticas de personas</h1>
      <Estadistica/>
    </div>
  )
}

export default App
