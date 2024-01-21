import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './component/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="PersonCard">
    <PersonCard name1="Doe, Jane" age={45} haircolor="Black" />
    <PersonCard name1="Smith, John" age={88} haircolor="Brown" />
    </div>
    </>
  )
}

export default App
