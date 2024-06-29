// 함수 = function(기능)
// 함수란 input, output 을 가진 단위

// 1. 함수 선언문
//function 함수의 이름 (매개변수) {
//  함수 내부에서 실행할 로직
//}

// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add (x, y) {
  return x + y;
}

// 2. 함수 표현식
let add2 = function (x, y) {
  return x + y;
}
// 위에와 동일한 함수


// 함수를 호출한다(= 사용한다)
// 함수명() -> add(입력값)
// add(2, 3) -> add 라는 함수를 사용 2 + 3 을 실행
console.log(add(2, 3)); // [5]

let functionResult = add(3, 4);
console.log(functionResult); // [7]

// add2 를 가지고 10과 20을 더한 값을 출력
let functionResult2 = add2(10, 20);
console.log(functionResult2); // [30]

// input : 함수의 input -> 매개변수 (매개체가 되는 변수!)
// output : return 문 뒤에 오는 값 : 반환값
