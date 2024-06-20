// Cart.test.js
const Cart = require('./Cart');

describe('Cart', () => {
    let cart;
    
    beforeEach(() => {
        cart = new Cart();
    });

    test('should initialize with an empty array of items', () => {
        expect(cart.items).toEqual([]);
    });

    test('should add an item to the cart', () => {
        const item = { name: 'item1', price: 10 };
        cart.addItem(item);
        expect(cart.items).toContain(item);
    });

    test('should remove an item from the cart', () => {
        const item = { name: 'item1', price: 10 };
        cart.addItem(item);
        cart.removeItem('item1');
        expect(cart.items).not.toContain(item);
    });

    test('should calculate the total price of items in the cart', () => {
        cart.addItem({ name: 'item1', price: 10 });
        cart.addItem({ name: 'item2', price: 20 });
        expect(cart.getTotalPrice()).toBe(30);
    });
});