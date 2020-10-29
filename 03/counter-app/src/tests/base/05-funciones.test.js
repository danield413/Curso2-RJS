
import '@testing-library/jest-dom';
import {getUser, getUsuarioActivo} from '../../base/05-funciones.js';


describe('Pruebas en 05-funciones', () => {
    
    test('Getuser debe retonar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest )

    })

    test('GetUsuarioActivo debe retonar un objeto ', () => {
        
        const nombre = 'juan';

        const user = getUsuarioActivo(nombre);
        console.log(user)

        expect( user ).toEqual({
            uid : 'ABC567',
            username : nombre
        });
        
    })
    
})
