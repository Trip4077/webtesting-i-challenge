const { repair } = require('./enhancer.js');
// test away!
describe('Enhancer', () => {

    describe('repair()', () => {
        
        it('should return the passed item with 100 durability', () => {
            //Arrange
            const item = { name: 'Buster Sword', enhancement: 12, durability: 64 }
            //Assert
            const expected = { name: 'Buster Sword', enhancement: 12, durability: 100  }
            //Act
            expect(repair(item)).toEqual(expected);
        });

    })
})