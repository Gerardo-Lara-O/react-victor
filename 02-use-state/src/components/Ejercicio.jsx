 import { useState } from "react"
 import { PropTypes} from "prop-types"
 
 const Ejercicio = ({year})=>{

    const [count, setCount] = useState(year)

    const cambiarYear = e => {
        
        let dato = parseInt(e.target.value)
        if(Number.isInteger(dato)){
            setCount(dato)
        }else{
            setCount(year)
        }
    }

    const siguiente = ()=>{
        setCount(count + 1)
    }

    const anterior = ()=>{
        setCount(count - 1)
    }
    
    return(
        <div>
            <h2>El anio actual es {count}</h2>
            <button onClick={anterior}>Pasar al anio anterior</button>
            <button onClick={siguiente}>Pasar al proximo anio</button>
            <p>
                Cambiar anio
                <input type="text" placeholder="Cambia el anio" onChange={cambiarYear}></input>
            </p>
        </div>
    )
 }


 Ejercicio.PropTypes = {
    year: PropTypes.number.isRequired
 }

 export default Ejercicio