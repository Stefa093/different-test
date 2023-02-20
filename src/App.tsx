import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'

function App() {

  const [folder, setFolder] = useState<string>("images1")

  const handleClick = (): void => {
    if(folder === 'images1') {
      setFolder('images2')
    } else {
      setFolder('images1')
    }
  }

  return (
    <div className="App relative max-w-sm ml-auto mr-auto shadow-xl my-4 scroll-smooth">
      <Header folder = {folder} handleClick= {handleClick} />
      <Body folder = {folder} />
    </div>
  )
}

export default App
