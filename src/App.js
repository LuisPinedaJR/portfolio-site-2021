//import logo from './logo.svg'
import Navbar from './components/navbar'
import Intro from './components/intro'

import './App.css'
import Cards from './components/cards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Navbar />
        <Intro />
        <Cards />
      </header>
    </div>
  )
}

export default App
