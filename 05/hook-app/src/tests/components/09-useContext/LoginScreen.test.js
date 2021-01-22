import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('pruebas en <LoginScreen />', () => {

    const setUser = jest.fn();

    //wrapper
    const wrapper = mount( 
        <UserContext.Provider value={{ 
            setUser
        }}>
            <LoginScreen  />
        </UserContext.Provider>

    )
    
    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de eejcutar el setUser con el argumento esperado del login', () => {
         
        wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenLastCalledWith({
            id: 12345,
            name: 'Fernando'
        })

    });

});