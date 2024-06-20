// Order.test.js
const Order = require('./Order');

describe('Order', () => {
    let order;
    let items;

    beforeEach(() => {
        items = [
            { name: 'item1', price: 10 },
            { name: 'item2', price: 20 }
        ];
        order = new Order(items);
    });

    test('should create an order with items', () => {
        expect(order.items).toEqual(items);
    });

    test('should calculate total price', () => {
        expect(order.getTotalPrice()).toBe(30);
    });

    test('should add an item to the order', () => {
        const newItem = { name: 'item3', price: 15 };
        order.addItem(newItem);
        expect(order.items).toContain(newItem);
    });

    test('should remove an item from the order', () => {
        order.removeItem('item1');
        expect(order.items).not.toContainEqual({ name: 'item1', price: 10 });
    });
});