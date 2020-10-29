import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo , subt}) => {

    return (
        <>
            <h1>{saludo}</h1>
            <p>{subt}</p>
        </>
    
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    subt : PropTypes.string
}

PrimeraApp.defaultProps = {
    subt : "aasdasd"
}

export default PrimeraApp;