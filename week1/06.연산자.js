// 연산자(+, -, *, /, %)

// 1. 더하기 연산자 (우선순위 문자열)
console.log(1 + 1); // 2
console.log(1 + "1"); // 11

// 2. 빼기 연산자 (우선순위 숫자열)
console.log(1 - "2"); // -1
console.log(1 - 2); // -1

// 3. 곱하기 연산자
console.log(2 * 3); // 6
console.log("2" * 3); // 6

// 4. 나누기 연산자
console.log(4 / 2); // 2
console.log("4" / 2); // 2

// 5. 나머지 연산자
console.log(5 % 2); // 1 => (5/2 = 2···1)

// 6. 할당 연산자(assignment)
// 6-1 등호 연산자
let x = 10;
console.log(x); [10]

// 6-2 더하기 등호 연산자(+=)
x += 5;
console.log(x); [15]

x = x + 5;
console.log(x); [20]

// 6-3 빼기 등호 연산자(-=)
x -= 5; [15]
// x = x - 5;
console.log(x);

// 6-4 곱하기
let a = 10;
a *= 2;
console.log(a); [20]

// 비교 연산자 (-> true or false를 반환하는 연산자)
// 1. 일치 연산자(===)
// 타입까지 일치해야 true 를 반환하는 연산자

// 숫자 2가 숫자 2랑 같니? 응!
console.log(2 === 2); // [true]
console.log("2" === 2); // [false]
console.log(2 === "2") // [false]

// 2. 불일치 연산자(!==)
// 타입까지 일치해야 false를 반환하는 연산자

// 숫자 2가 숫자 2와 다르니? 아니!
console.log(2 !== 2); // [false]
console.log("2" !== 2); // [true]
console.log(2 !== "2") // [true]

// 3. 작다 연산자(<){
console.log("-----");
console.log(2 < 3); // [true]
console.log(2 <= 3); // [true]
console.log(3 <= 3); // [true]
console.log(4 <= 3); // [false]

// 4. 논리 연산자
// 논리곱 연산자(&&) -> 두 값이 모두 true 일떄만 true 를 반환 
console.log("-----");
console.log(true && true); // [true]
console.log(true && false); // [false]
console.log(false && true); // [false]
console.log(false && false); // [false]

// 논리합 연산자(||) -> 두 값 중 하나라도 true 이면 true 를 반환
console.log("-----");
console.log(true || true); // [true]
console.log(true || false); // [true]
console.log(false || true); // [true]
console.log(false || false); // [false]

// 논리부정 연산자(!) -> 값을 반대로 바꿈
console.log("-----");
console.log(!true); // [false]
let b = true;
console.log(!b); // [false]

// 5. 삼항 연산자 -> 조건에 따라 값을 선택한다 
// [조건] ? "true일 경우" : "false일 경우"
let y = 10;
let result = (y > 5) ? "크다" : "작다"; // [크다]
// y가 5보다 큰가요? 크다(true)
console.log("-----");
console.log(result);

let z = 20;
// 3항 연산자를 이용해서 y가 10보다 작은 경우 작다를 console.log로 출력
// 만약 10보다 크다면 크다를 출력
let result2 = (z < 10) ? "작다" : "크다";
console.log(result2);

// 6. 타입연산자(typeof)
console.log(typeof "5"); // [string]
console.log(typeof 5); // [number]