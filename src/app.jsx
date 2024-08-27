import { useState } from 'preact/hooks'
import './app.css'
import { Homepage } from './Pages/Homepage'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
    </>
  )
}
