import reactLogo from './assets/react.svg'
import './App.css'
import Saludo from './components/saludo'
import MiComponente from './components/MiComponente'
import SegundoComponente from './components/SegundoComponente'
import TercerComponente from './components/tercerComponente'

function App() {
const ficha_medica = {
  altura: 187,
  grupo: "h+",
  estado: "Bueno",
  alergias: "Ninguna"
}
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
      <TercerComponente nombre="Gerardo" apellido="Lara" ficha={ficha_medica}></TercerComponente>
    </>
  )
}

export default App
