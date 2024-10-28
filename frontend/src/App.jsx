import { useState } from 'react'
import './App.css'
import FileUpload from './pages/FileUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FileUpload />
    </>
  )
}

export default App
