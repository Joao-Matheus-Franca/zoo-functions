const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testando de handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toEqual('function');
  });
  test('Testando de handlerElephants recebe apenas strings', () => {
    expect(handlerElephants(20)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  test('Testando de handlerElephants retorna Undefined ao não receber parâmetros', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  test('Testando se o retorno da função é o esperado', () => {
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('teste')).toEqual(null);
  });
});
