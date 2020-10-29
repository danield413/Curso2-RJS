import React, {useState, useMemo} from 'react';
import '../02-useEffect/effects.css';
import {useCounter} from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {

    const { counter, increment } = useCounter( 100 );
    const [show, setShow] = useState(true);

   
    //como el contador no esta cambiando ( counter ) no es necesario que vuelva a ejecutar procesoPesado(counter) sino que lo memoriza ya que como se ha dicho este no cambia pero si cambia se vuelve a ejecutar, esto ayuda al rendimiento y memoria 
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);


    return (
        <div>
            <h1>MemoHook</h1>
            <h3> Counter <small>{ counter } </small>  </h3>
            <hr />

            <p> { memoProcesoPesado }</p>

            <button className="btn btn-dark" onClick={increment}>
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
