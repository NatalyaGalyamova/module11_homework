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

// Задание 2
function isPrime(num) {
  let _true = 'число простое', _false = 'ответ неверный';
  if (num <= 1 && num > 1000) return _false;
  if (num == 2) return _true;
  for (let i = 2; i <= num / 2; i++) {
  if (num % i == 0) {
    return _false;
  }
  }
  return _true;
  }
console.log(isPrime(1001));
console.log(isPrime(53));

// Задание 3
function sum(x) {
  return function(y) {
      return x + y;
  };
}

let f = sum(5);
console.log( f(0), f(1), f(2) );

// Задание 4
function getIntervalNumbers(a,b) {
  let i = setInterval(() => {
    console.log(a++);
    if (a > b) clearInterval(i);
  }, 1000)
}

getIntervalNumbers(5, 15);

// Задание 5
const isExponent = (x, n) => {
  const result = Math.pow(x, n);
  console.log(result);
}
isExponent(5, 2);