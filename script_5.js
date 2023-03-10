// Имеется массив объектов, представляющий собой массив треугольников,
// где поля объекта a, b и c - стороны треугольника. Создать новый массив,
// заполнив его объектами с единственным полем p - периметром соответствующего треугольника.

// Input: [{a: 5, b: 3, c: 4},
// {a: 1, b: 3, c: 4},
// {a: 4, b: 7, c: 4},
// {a: 2, b: 2, c: 3}]

// Output: [{ p: 12 },
// { p: 8 },
// { p: 15 },
// { p: 7 }]

const arr = [
  {
    a: 5, 
    b: 3,
    c: 4
  },
  {
    a: 1, 
    b: 3, 
    c: 4
  },
  {
    a: 4, 
    b: 7, 
    c: 4
  },
  {
    a: 2, 
    b: 2, 
    c: 3
  }
];

const calcPerimetrs = (array) => {
  const perimeters = array.map((element,) => {
    return {
      p: element.a + element.b + element.c;
    };
  });
  return perimeters;
};

console.log(calcPerimetrs(arr));