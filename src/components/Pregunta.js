import React, {Fragment, useState} from 'react';

const Pregunta = () => {

    //definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError]= useState(false)
;
    //Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN(cantidad) ){
            guardarError(true);
            return;
        }

        //Si se pasa la validacion
        
    }

    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu precupuesto"
                    onChange={definirPresupuesto}
                    
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;