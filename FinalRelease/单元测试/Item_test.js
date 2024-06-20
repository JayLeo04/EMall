// Item.test.js
const Item = require('./Item');

describe('Item', () => {
    let item;

    beforeEach(() => {
        item = new Item('item1', 10);
    });

    test('should create an item with a name and price', () => {
        expect(item.name).toBe('item1');
        expect(item.price).toBe(10);
    });

    test('should update the item price', () => {
        item.updatePrice(15);
        expect(item.price).toBe(15);
    });

    test('should return item details', () => {
        expect(item.getItemDetails()).toEqual({
            name: 'item1',
            price: 10
        });
    });
});