// 형 변환
// 형태 -> 바꾼다
// 명시적 형 변환, 암시적 형 변환

// 암시적
// 1-1 문자열
// [12 string]
let result1 = 1+"2";
console.log(result1);
console.log(typeof result1);

// [1true string]
let result2 = "1" + true;
console.log(result2);
console.log(typeof result2);

// {}, null, undefined + "1" => 문자열

// 1-2 숫자
// [-1 number]
let result3 = 1 - "2";
console.log(result3);
console.log(typeof result3);

// [6 number]
let result4 = "2" * "3";
console.log(result4);
console.log(typeof result4);

// 2. 명시적 형 변환
// 2-1 boolean
console.log(Boolean(0)); // [false]
console.log(Boolean("")); // [false]
console.log(Boolean(null)); // [false]
console.log(Boolean(undefined)); // [false]
console.log(Boolean(NaN)); // [false]
console.log(Boolean("false")); // [true]
console.log(Boolean({})); // [true]

// 2-2 문자열
let result5 = String(123);
console.log(typeof result5); // [string]
console.log(result5); // [123]

let result6 = String(true);
console.log(typeof result6); // [string]
console.log(result6); // [true]

let result7 = String(false);
console.log(typeof result7); // [string]
console.log(result7); // [false]

let result8 = String(null);
console.log(typeof result8); // [string]
console.log(result8); // [null]

let result9 = String(undefined);
console.log(typeof result9); // [string]
console.log(result9); // [undefined]

// 1-3 숫자
let result10 = Number("123");
console.log(result10); // [123]
console.log(typeof result10); // [number]