import sum from './sum';

describe('тесты на работу тестов', () => {
  it('1 + 1 is 2', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
