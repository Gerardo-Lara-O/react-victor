import { useState } from "react";

const MiPrimerEstado = ()=>{
    const [ nombre, setNombre ] = useState("Victor")
    const cambiarNombre = (e,nombreFijo)=>{
        setNombre(nombreFijo)
        console.log(e)
    }
    return(
        <div>
            <h3>Componente: MiPrimerEstado</h3>
            <strong className="name">
                {nombre}
            </strong>
            <button onClick={ e => cambiarNombre(e,"Francisco") }>Cambiar nombre por Francisco</button>
            <input type="text" placeholder="Cambia el nombre" onChange={e => cambiarNombre(e,e.target.value)}></input>
        </div>
    )
}

export default MiPrimerEstado