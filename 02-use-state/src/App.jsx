import reactLogo from './assets/react.svg'
import './App.css'
import MiPrimerEstado from './components/MiPrimerEstado'
import Ejercicio from './components/Ejercicio'

function App() {
const fecha = new Date()
const year = fecha.getFullYear()
  return (
    <>
      <div>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      {/* <h2>Hook - useState</h2> */}
      {/* <MiPrimerEstado></MiPrimerEstado> */}
      <Ejercicio year={year}></Ejercicio>


    </>
  )
}

export default App
