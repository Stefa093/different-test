import './App.css'
import Button from './components/Button'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Information from './components/Information'
import Interests from './components/Interests'

function App() {

  return (
    <div className="App">
      <Header />
      <Button />
      <Information />
      <Interests />
      <Gallery />
    </div>
  )
}

export default App
