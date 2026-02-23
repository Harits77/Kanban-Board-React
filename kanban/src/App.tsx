import { useState } from 'react'
import KanbonBoard from './components/kanbonBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <KanbonBoard />
    </>
  )
}

export default App
