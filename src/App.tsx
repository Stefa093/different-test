import './App.css'
import Body from './components/Body'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Information from './components/Information'
import Interests from './components/Interests'

function App() {

  return (
    <div className="App relative max-w-sm ml-auto mr-auto border-2 border-gray-300 my-4">

      <Header />
      <Body />
    </div>
  )
}

export default App
