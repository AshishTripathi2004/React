import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card.jsx'

function App() {
  return(
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl font-bold'>This is a header</h1>
    <Card username="MyCard" />
    </>
  )
}

export default App
