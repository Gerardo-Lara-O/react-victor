const EventosComponente = ()=>{
    const hasDadoClick = (e, nombre)=>{
        console.log(e)
        alert(`Has dado click ${nombre}`)
    }

    const hasDadoDobleClick =()=>{
        alert("Has dado doble click")
    }

    const hasEntrado = (e,accion)=>{
        console.log(`Has ${accion} al recuadro`)
    }


    const estasFuera = ()=>{
        console.log(`chauu`)
    }
    // const hasSalido = (e,accion)=>{
    //     alert(`Has ${accion} al recuadro`)
    // }

    const estadasDentro = ()=>{
        alert(`Estas dentro del inpu, mete tu nombre!!!`)
    }
    return(
        <div>
            <h2>Eventos en react</h2>
            <p>Evento Click</p>
            <button onClick={ e => hasDadoClick(e,"Gerardo") }>Dame Click</button>
            <p>Evento Doble Click</p>
            <button onDoubleClick={ hasDadoDobleClick}>Dame doble Click</button>
            <p>Evento onMouseEnter</p>
            <div id="caja" onMouseEnter={e => hasEntrado(e,"Entrado")} onMouseLeave={e => hasEntrado(e,"Salido")}>
                Pasa por encima
            </div>
            <p>Eventos focus y blur</p>
            <input type="text" onFocus={ estadasDentro } onBlur={ estasFuera} placeholder="Introduce tu nombre"></input>
        </div>
    )
}

export default EventosComponente