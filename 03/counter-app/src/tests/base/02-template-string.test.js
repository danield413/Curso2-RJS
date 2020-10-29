import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string.js';

describe('pruebas en 02-template-string.js', () => {

    test('getSaludo debe retornar hola Daniel', () => {
        const nombre = 'Daniel';

        const saludo = getSaludo( 'Daniel' );

        //se espearia que _____ sea _________
        expect( saludo ).toBe( 'Hola ' + nombre )
    })
    
    
    test('getSaludo debe retornar Hola Carlos si no hay argumento a nombre', () => {
        
        const saludo = getSaludo();

        //se espearia que _____ sea _________
        expect( saludo ).toBe( 'Hola Carlos' )
    })
})