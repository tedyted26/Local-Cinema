const Admin = require('../models/admin.js');
const SHOWS = [];

describe('Admin class', () => {
  test('createShow method should create a new show successfully', () => {
    const admin = new Admin(1, 'Admin User', 'admin@example.com', 'adminpass', 30, '123-456-7890', true, true);

    const result = admin.createShow('Test Show', 'Test Description', '2023-12-08T12:00:00', 20.5, 'Main Room', SHOWS);

    expect(result).toBe('Show created successfully');
    expect(SHOWS.length).toBe(1);
    expect(SHOWS[0]).toMatchObject({
      showID: 1,
      name: 'Test Show',
      description: 'Test Description',
      datetime: '2023-12-08T12:00:00',
      price: 20.5,
      room: 'Main Room',
    });
  });

});
