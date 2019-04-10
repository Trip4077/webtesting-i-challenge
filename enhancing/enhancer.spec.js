const { repair } = require('./enhancer.js');
const items = require('../items');

// test away!
describe('Enhancer', () => {

    describe('repair()', () => {
        
        it('should return the passed item with 100 durability', () => {
            //Arrange
            const item = items[0];

            //Assert
            const expected = { name: 'Buster Sword', enhancement: 5, durability: 100 }

            //Act
            expect(repair(item)).toEqual(expected);

            expected.name = 'Buster Cannon';

            expect(repair(items[1])).toEqual(expected);
        });

        it('should return the item unchanged if durability is undefined or null', () => {
            const nullDurability = items[6];
            const undefinedDurability = items[5];

            expect(repair(nullDurability)).toEqual(nullDurability);
            expect(repair(undefinedDurability)).toEqual(undefinedDurability);
        })

        it('should convert a string to number if conversion possible else throw error', () => {
            const convertable = items[4];
            const nonConvertable = items[7];

            const expectedConvert = {
                ...convertable,
                durability: 100
            }
            
            expect(repair(convertable)).toEqual(expectedConvert);
            expect(() => { repair(nonConvertable) }).toThrow();
        })
    })
})