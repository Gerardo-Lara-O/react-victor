import reactLogo from './assets/react.svg'
import './App.css'
import Saludo from './components/saludo'
import MiComponente from './components/MiComponente'
import SegundoComponente from './components/SegundoComponente'
import TercerComponente from './components/tercerComponente'
import EventosComponente from './components/EventosComponente'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>

      
      
      <hr></hr>
      {/* <TercerComponente nombre="Gerardo" apellido="Lara" ficha={ficha_medica}></TercerComponente> */}
      <EventosComponente></EventosComponente>

      {/* Evento doble click */}
    </>
  )
}

export default App
