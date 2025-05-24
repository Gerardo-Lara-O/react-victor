import reactLogo from './assets/react.svg'
import './App.css'
import Saludo from './components/saludo'
import MiComponente from './components/MiComponente'
import SegundoComponente from './components/SegundoComponente'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>

      <Saludo></Saludo>
      {/* Cargando el componente */}
      <MiComponente></MiComponente>
      <SegundoComponente></SegundoComponente>
    </>
  )
}

export default App
