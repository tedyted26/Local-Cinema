const Shift = require('../models/shift.js');

describe('Shift class', () => {
  test('should return true when volunteers are needed', () => {
    const shift = new Shift(1, 'Role', 'Place', '2023-01-01', 2, 3, [1, 2], 'Show');
    const result = shift.isShiftAvailable();

    expect(result).toBe(true);
  });

  test('should return false when volunteers are not needed', () => {
    const shift = new Shift(2, 'Role', 'Place', '2023-01-01', 2, 0, [1, 2], 'Show');
    const result = shift.isShiftAvailable();

    expect(result).toBe(false);
  });

  test('should handle errors', () => {
    const consoleLogMock = jest.spyOn(console, 'log').mockImplementation(() => {});
    const shift = new Shift(3, 'Role', 'Place', '2023-01-01', 2, 'invalid', [1, 2], 'Show');
    const result = shift.isShiftAvailable();
  
    expect(result).toBe(false);
    consoleLogMock.mockRestore();
  });
});