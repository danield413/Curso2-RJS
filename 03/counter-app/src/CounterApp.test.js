import React from 'react';
import '@testing-library/jest-dom';
import shallow from 'enzyme/build/shallow';

import CounterApp from './CounterApp';

describe('Pruebas en <CounterApp />', () => {
    
    let wrapper = shallow( <CounterApp /> );

    beforeEach(() => {

        wrapper = shallow( <CounterApp /> );

    })

    test('dbe mostrar <CounterApp /> correctamente y sus valores por defecto', () => {
        

    expect(wrapper).toMatchSnapshot();

    })
    
    test('debe mostrar el valor por defecto de 100 ', () => {
        
    const wrapper = shallow(<CounterApp value={100} />)

    const counterText = wrapper.find('h2').text().trim();
        
    expect(counterText).toBe('100');

    })

    test('debe de incrementar con el boton de +1 ', () => {
        
        wrapper.find('button').at(0).simulate('click')
        
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');
    })

    test('debe decrementar con el boton de -1 ', () => {

        
        
        wrapper.find('button').at(1).simulate('click')
        
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( "9" );
    })
    
    test('debe de colocar el valor por defecto con el boton ', () => {
        
        const wrapper = shallow(<CounterApp value={105} />)

        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105')

    })
    

})
