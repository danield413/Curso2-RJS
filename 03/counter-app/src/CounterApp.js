import React, {useState} from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10}) => {

    const [counter , setCounter ] = useState( value )

    const handleAdd = () => {
        setCounter(counter + 1 );
    }

    const handleSusbstract = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter( value )
    }

    return(
       <>
         <h1>CounterApp</h1>
         <h2> { counter } </h2>
         <button onClick={ handleAdd }>+1</button>
         <button onClick={ handleSusbstract }>-1</button>
         <button onClick={ handleReset }>0</button>
       </>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number 
}

export default CounterApp;
