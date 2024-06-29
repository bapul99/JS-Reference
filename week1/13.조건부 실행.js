// 조건부 실행
let x = 10;

// and 조건 (&&) 
(x > 0) && console.log("x는 양수입니다.");

// if (x > 0) {
//   console.log("x는 양수입니다.");
//} -> 위 코드와 동일

// or 조건 (||)
// 상황 연산자와 단축평가
let y; // y에는 undefined
let z = y || 20;
// y라는 값은 선언만 하고 값을 할당하지 않아 undefined // let z 는 y가 undefined 이면 20을 기본으로 세팅
console.log(z); // [20]