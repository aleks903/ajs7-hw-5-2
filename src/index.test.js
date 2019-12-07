import getAttack from './index.js';

test('Проверка спец атаки', () => {
  const objHeroes = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };
  const received = getAttack(objHeroes);
  const expected = [
    {
      id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...',
    },
    {
      id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...',
    },
  ];
  expect(received).toEqual(expected);
});
