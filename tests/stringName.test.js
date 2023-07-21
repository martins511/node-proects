
const add = require('../stringName');

describe('StringName', ()=>{
    it('As',()=>{
        const result = add.greeting('Martins')
        expect(result).toMatch('Hello')
    })
})