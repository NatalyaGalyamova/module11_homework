// Задание 1
let arr = [3, 5, undefined, 94, 4, null, 0, 'string', true];

function getNumbers(array) {
let odd = 0;
let even = 0;
let zero = 0;
let allOtherItems = 0;
for (let i=0; i < array.length; i++) {
  if (typeof array[i] === 'number' && !isNaN(array[i])) {
    if (array[i] === 0) {
      zero++
    } else if (array[i] % 2 === 0) {
      even++
    } else {
      odd++
    }
  } else {
    allOtherItems++
  }
}
console.log(`Количество четных чисел: ${even}`);
console.log(`Количество нечетных чисел: ${odd}`);
console.log(`Количество нулей: ${zero}`);
console.log(`Все остальные значения: ${allOtherItems}`);
}

getNumbers(arr);





// Задание 1
let value = +prompt('Введите значение');
if (typeof value === 'number' && !isNaN(value)) {
  if (value % 2 === 0) {
    console.log('Четное число')
  } else {
    console.log('Нечетное число')
  }
} else {
  console.log ('Упс, кажется, вы ошиблись')
}

// Задание 2
let x;
if (typeof x === 'number') {
  console.log('x is a number')
} else if (typeof x === 'string') {
  console.log('x is a string')
} else if (typeof x === 'boolean') {
  console.log('x is a boolean')
} else {
  console.log ('Type of x is not defined')
}

// Задание 3
let str = 'Hello!';
console.log(str.split('').reverse().join(''));

// Задание 4
let a = Math.floor(Math.random() * 101);
console.log(a);

// Задание 5
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length);
let result = arr.map((item) => console.log(item));

// Задание 6
let arr = [9, 4, 26, 31, 2];
let isIdentical = true;

for (let i=1; i < arr.length; i++) {
  if (arr[i] !== arr[0]) {
    isIdentical = false;
    break;
  } 
}
console.log(isIdentical);

// Задание 7 
let arr = [3, 5, 72, 94, 15, 4, null, 0, 0, 'string', true];
let odd = 0;
let even = 0;
let zero = 0;
let allOtherItems = 0;
arr.forEach(function(item) {
  if (item !== item*1) {
    allOtherItems++
  } else if (item === 0) {
    zero++
  } else if (item % 2 === 0) {
    even++
  } else if (item % 2 !== 0) {
    odd++
  }
});
console.log(even);
console.log(odd);
console.log(zero);
console.log(allOtherItems);

// Задание 8
let myMap = new Map();
myMap.set('cats', 5);
myMap.set('dogs', 10);
myMap.set('fish', 26);

for (let [keys, values] of myMap) {
  console.log(`Key - ${keys}, Value - ${values}`)
}