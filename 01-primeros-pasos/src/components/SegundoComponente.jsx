

const SegundoComponente = ()=> {

    // const libros = ["Harry Potter", "Juego de Tronos", "Star Wars"]
    const libros =[]
    return(
        <div className="segundo-componente">
        <h2>Listado de Libros:</h2>
            {
                libros.length >=1 ? (
                    <ul>
                        {
                            libros.map((libro, indice)=>{
                                return <li key={indice}>{libro}</li>
                            })
                        }
                    </ul>
                ) : (
                    <p>No hay libros</p>
                )
            }
        </div>
    )
}

export default SegundoComponente