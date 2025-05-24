// Importar modulos de react / dependencias
import {React} from "react";

// Funcion del componente
const MiComponente = () => {
    // const nombre = "Gerardo";
    // const web = "gerardiweb.es";
    const usuario = {
        nombre: "Gerardo",
        apellidos: "Lara",
        web: "jerryweb.es"
    }

    
    return(
        <>
            <h2>Componente Creado</h2>
            <h3>Datos del usuario: </h3>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Web: {usuario.web}</li>
            </ul>
            <p>Este es mi primer componente</p>
        </>
    )
}

// Exporta el componente
export default MiComponente