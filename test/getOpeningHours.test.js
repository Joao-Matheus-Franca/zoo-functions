const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Testa se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toEqual('function');
  });
  test('Testa se getOpeningHours retorna um objeto ao não receber argumentos', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  const closed = 'The zoo is closed';
  test('Testa se getOpeningHours retorna os valores e erros esperados', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(closed);
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Tuesday', '09:00-PM')).toEqual(closed);
    expect(getOpeningHours('Tuesday', '12:00-PM')).toEqual('The zoo is open');
    expect(getOpeningHours('Tuesday', '12:00-AM')).toEqual(closed);
    expect(getOpeningHours('Wednesday', '6:00-AM')).toEqual(closed);
    expect(() => getOpeningHours('Monday', 'AA:00-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Monday', '09:00-MIN')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Monday', '20:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Monday', '10:60-AM')).toThrow('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Segunda', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
});
