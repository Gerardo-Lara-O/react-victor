import reactLogo from './assets/react.svg'
import './App.css'
import Saludo from './components/saludo'
// Importando nuestro componente
import MiComponente from './components/MiComponente'

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
    </>
  )
}

export default App
