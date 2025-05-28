

const TercerComponente = ({nombre, apellido, ficha}) =>{
    
    
    return (
        <div>
        <h2>Comunicacion entre componentes</h2>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <ul>
                <h3>Ficha Medica</h3>
                <li>Altura: {ficha.altura}</li>
            </ul>
        </ul>
        </div>
    )
}

export default TercerComponente