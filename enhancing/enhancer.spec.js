const { repair, succeed } = require('./enhancer.js');
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
        });

        it('should convert a string to number if conversion possible else throw error', () => {
            const convertable = items[4];
            const nonConvertable = items[7];

            const expectedConvert = {
                ...convertable,
                durability: 100
            }

            expect(repair(convertable)).toEqual(expectedConvert);
            expect(() => { repair(nonConvertable) }).toThrow();
        });
    });

    describe('succeed()', () => {

        it('should increase enhancment level by 1', () => {
            const item1 = items[0];
            const item2 = items[1];

            const expected1 = {
                ...item1,
                enhancement: item1.enhancement + 1
            }

            const expected2 = {
                ...item2,
                enhancement: item2.enhancement + 1
            }

            expect(succeed(item1)).toEqual(expected1);
            expect(succeed(item2)).toEqual(expected2);
        });

        it.todo('should not increment if enhancement is 20');

        it.todo('should not change durability');

        it.todo('should return the item unchanged if enhancement is null or undefined');

        it.todo('should convert a string to number if conversion possible else throw error');
    })
})