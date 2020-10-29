// import '@testing-library/jest-dom';
import React from 'react';
import '@testing-library/jest-dom';
import shallow from 'enzyme/build/shallow';

import PrimeraApp from './primeraApp';


describe('Pruebas en <PrimeraApp />', () => {
    

    // test('debe de mostrar el mensaje "hola soy goku" ', () => {
    //     const saludo = "Hola, soy Goku";
    //     const {getByText} = render( <PrimeraApp saludo={saludo}/>)
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // })
    
    test('debe mostrar <PrimeraApp />> correctamente ', () => {
        
        const wrapper = shallow( <PrimeraApp saludo="Hola, soy Goku" /> )

        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar el subtitulo enviado por props ', () => {
        
        const saludo = "Hola, Soy Goku";
        const subt = "soy un subt";
        const wrapper = shallow(
             <PrimeraApp 
             saludo={saludo}
             subt={subt} />
        )

        const textoParrafo = wrapper.find('p').text().trim();
        
        expect( textoParrafo ).toBe( subt )

    })

})
