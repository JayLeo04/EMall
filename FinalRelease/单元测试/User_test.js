// User.test.js
const User = require('./User');

describe('User', () => {
    let user;

    beforeEach(() => {
        user = new User('John Doe', 'john.doe@example.com');
    });

    test('should create a user with a name and email', () => {
        expect(user.name).toBe('John Doe');
        expect(user.email).toBe('john.doe@example.com');
    });

    test('should update the user email', () => {
        user.updateEmail('new.email@example.com');
        expect(user.email).toBe('new.email@example.com');
    });

    test('should return user details', () => {
        expect(user.getDetails()).toEqual({
            name: 'John Doe',
            email: 'john.doe@example.com'
        });
    });
});