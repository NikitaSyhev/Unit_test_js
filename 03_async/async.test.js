const Ajax = require('./async');
const axios = require('axios');


jest.mock('axios');


describe('Ajax echo funcrion', () =>{
    test('should return ', async() => {
        const result = await Ajax.echo('some data');
        expect(result).toBe('some data');
    })

    test('should catch error with promise ', async() => {
        try{
            await Ajax.echo();

        }catch(e){
            expect(e.message).toBe('error');
        }
    })
})


describe('Ajax: GET ', ()=> {
    let responce;
    let todos;
    beforeEach(()=> {
        todos = [
            {id: 1, 
            Title: 'Todo 1',
            completed: false,
        }
        ]
    })

    responce = {
        data: {
            todos
        }
    }
    test('should return data from backend', ()=> {
        axios.get.mockReturnValue(responce);

        return Ajax.get().then( data => {
            expect(data.todos).toEqual(todos);
        })
    })
})