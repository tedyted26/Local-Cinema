const User = require('../models/user.js');

let USERS = [];

global.alert = jest.fn();

describe('User class', () => {
beforeEach(() => {
    global.alert.mockClear();
    });      
  test('createUser should add a new user to USERS array', () => {
    const user = new User(
      1,
      'John Doe',
      'john.doe@example.com',
      'password123',
      '1990-01-01',
      '1234567890',
      false,
      true
    );

    // Mock the find method for the USERS array
    USERS.find = jest.fn(() => false);
    ulenght = USERS.length
    USERS = user.createUser(USERS)
    const result = ulenght != USERS.length? true: false;

    expect(result).toBe(true);
    expect(USERS.length).toBe(1);
    expect(USERS[0]).toEqual({
      userID: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      birthdate: '1990-01-01',
      phone: '1234567890',
      isSuper: false,
      isAdmin: true,
    });
  });

  test('createUser should return false if user already exists', () => {
    const existingUser = {
      userID: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      password: 'password456',
      birthdate: '1995-05-05',
      phone: '9876543210',
      isSuper: true,
      isAdmin: false,
    };

    // Mock the find method to return true, simulating an existing user
    USERS.find = jest.fn(() => existingUser);

    const user = new User(
      2,
      'Jane Doe',
      'jane.doe@example.com',
      'password789',
      '1995-05-05',
      '9876543210',
      true,
      false
    );
    const initialLength = USERS.length;
    USERS = user.createUser(USERS);
    expect(USERS).toHaveLength(initialLength);
    expect(global.alert).toHaveBeenCalledWith("This account already exists!");
  });
});