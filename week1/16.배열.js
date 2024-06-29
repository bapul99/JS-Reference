// 배열

// 1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 크기 지정
let number = new Array(5);

console.log(fruits.length); // [3]
console.log(number.length); // [5]

// 2. 요소 접근
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 3. 배열 메소드
// 3-1. push
let fruits2 = ["사과", "바나나"];
console.log("1 =>", fruits2);

fruits2.push("오렌지");
console.log("2 =>", fruits2);

// 3-2. pop
let fruits3 = ["사과", "바나나"];
console.log("1 =>", fruits3); // ['사과', '바나나']
fruits3.pop();
console.log("2 =>", fruits3); // ['사과']

// 3-3. shift
let fruits4 = ["사과", "바나나", "키위"];
console.log("1 =>", fruits4); // ['사과', '바나나', '키위']
fruits4.shift();
console.log("2 =>", fruits4); // ['바나나', '키위']

// 3-4. unshift
let fruits5 = ["사과", "바나나", "키위"];
fruits5.unshift("포도");
console.log(fruits5); // ['포도', '사과', '바나나', '키위']

// 3-5. splice
let fruits6 = ["사과", "바나나", "키위"];
fruits6.splice(1, 1, "포도");
console.log(fruits6); // ['사과', '포도', '키위'] 

// 3-6. slice 
let fruits7 = fruits6.slice(1, 2);  // 1번째부터 2번째 전까지
console.log(fruits7); // ['포도']

// forEach, map, filter, find
let numbers = [1, 2, 3, 4, 5];

// 매개변수 자리에 함수를 넣는 것 : 콜백함수
// forEach : 배열을 순회
numbers.forEach(function(item){
  console.log("item입니다 =>", item);
}); // 1, 2, 3, 4, 5

// map : 배열을 반환
let newNumbers = numbers.map(function(item){
  return item * 2;
});

console.log(newNumbers); // [2, 4, 6, 8, 10]

// filter : 조건에 맞는 요소만 반환
let evenNumbers = numbers.filter(function(item){
  return item === 5;
});

console.log(evenNumbers); // [5]

// find : 조건에 맞는 요소를 반환
let evenNumber = numbers.find(function(item){
  return item > 3;
});

console.log(evenNumber); // [4] 