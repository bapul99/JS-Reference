// 데이터 타입
// runtime : run 하는 time
// 코드를 작성할 때가 아니라, 실제 코드가 실행될 때
// (터미널에 코드가 실행될 때)
// 그 때, 데이터 타입이 결정된다.
// java : String a = "abc";
// const a = "abc"

// 1. 숫자 데이터 타입
// 1-1. 정수
// [10 number]
let num1 = 10;
console.log(num1);
console.log(typeof num1);

// 1-2 실수(float)
// [3.14 number]
let num2 = 3.14;
console.log(num2);
console.log(typeof num2);

// 1-3 지수형(Exp)
// [250000 number]
let num3 = 2.5e5; // 2.5 x 10^5
console.log(num3);
console.log(typeof num3);

// 1-4.
// [NaN] - Not a Number
let num4 = "hello" / 2;
console.log(num4);

// 1-5 무한대(Infinity)
// [Infinity number]
let num5 = 1 / 0;
console.log(num5);
console.log(typeof num5);

// 1-6 무한대(Infinity)
// [-Infinity number]
let num6 = -1 / 0;
console.log(num6);
console.log(typeof num6);
