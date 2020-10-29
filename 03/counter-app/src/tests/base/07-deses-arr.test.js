import {retornaArreglo} from '../../base/07-deses-arr'

describe('Pruebas en desectructuracion', () => {
    
    test('debe retornar 1 string y 1 numero ', () => {
        
        const arr = retornaArreglo(); //ABC 123

        expect(arr).toEqual(["ABC",123])

    })
    
})
