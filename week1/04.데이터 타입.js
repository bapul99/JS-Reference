// 불리언(Boolean)
// true, false
let bool1 = true;
let bool2 = false;

console.log(bool1); // [true]
console.log(bool2); // [false]
console.log(typeof bool1); // [boolean]
console.log(typeof bool2); // [boolean]

// undefined
// un : not, define : 정의하다
let x;
console.log(x); // [undefined]

// null : 값이 존재하지 않음을 '명시적'으로 나타내는 방법
// null  ≠ undefined null 은 의도적으로 값이 없음을 나타내기 위함
let y = null;
console.log(y);

// object(객체) : key-value pair
//[object]
let person = {
    name: 'choi',
    age: 20,    
}
console.log(typeof person)

// array(배열) : 여러개의 데이터를 순서대로 저장하는 데이터 타입
let number = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];