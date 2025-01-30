const { hunTextToEngTextMODUL } = require('./hunTextToEngTextMODUL');

describe('hunTextToEngText', () => {

    test('Alap feladat ékezetes karaktert angolra alakít', () => {

        // const result = hunTextToEngTextMODUL('áéíóöőüúű');
        expect(hunTextToEngTextMODUL('áéíóöőüúű')).toBe('aeiooouuu');
    })

    test('Számot kap, hibát dob',()=>{
        expect(()=>{hunTextToEngTextMODUL(2)}).toThrow();
    })

    test('Tömböt kap, hibát dob',()=>{
        expect(()=>{hunTextToEngTextMODUL(['álom'])}).toThrow('A függvény nem szöveget, hanem "object" tipusú argomentumot kapott');
    })


    test('Üres stringet kap, üreset térít vissza',()=>{

        expect(hunTextToEngTextMODUL("")).toBe("")
    })

});