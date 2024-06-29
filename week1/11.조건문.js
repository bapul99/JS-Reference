// 조건문 - if, else if, switch

// 1. if 문
// if (true or false 가 나올 수 있는 조건) {
// main login
//}

let a = 10;

if (a > 0) {
  // "true 일 경우" 만 내부 로직이 실행
  console.log('a는 양수입니다');
}

// 1-2 

let b ="hello world";

// y의 길이가 5보다 크거나 같으면 길이를 console.log으로 출력
if (b.length >= 5) {
  console.log(b.length); // [11]
}

// 2. if - else 문
//if () {
    //main logic #1   true 일 경우 #1 이 실행
//} else {
    //main logic #2  false 일 경우 #2 가 실행

let c = 10;
if (c > 0) {
  console.log("c는 양수입니다");
} else {
  console.log("c는 음수입니다");
}
// c는 양수입니다

let d = -6;
if (d > 0) {
  console.log("d는 양수입니다");
} else {
  console.log("d는 음수입니다");
}
// d는 양수입니다


// if - else if - else 문
//if (조건1) {
    //main logic#1
//} else if (조건2) {
    //main logic#2
//} else  {
    //main logic#3
//}
// 조건1 에 false 면 logic#2 로 조건2 에도 false 면 logic#3 으로

let e = 10;

if (e < 0) {
  //main logic#1
  console.log("1");
} else if (e >= 0 && e < 10) /* 0보다 크거나 같고 10보다 작은 수 */ {
  //main logic#2
  console.log("2");
} else  {
  //main logic#3
  console.log("3");
}
// [3]

let f = 5;

if (f < 0) {
  //main logic#1
  console.log("1");
} else if (f >= 0 && f < 10)  {
  //main logic#2
  console.log("2");
} else  {
  //main logic#3
  console.log("3");
}
// [2]

// 1-4. switch 
// 변수의 값에 따라, 여러 개의 경우 (case) 중 하나를 선택
// default
let fruit = "오징어";

switch (fruit) {
  case "사과":
    console.log('사과입니다.');
    break;
  case "바나나":
    console.log('바나나입니다.');
    break;
  case "키위":
    console.log('키위입니다.');
    break;
  default:
    console.log('아무것도 아닙니다.')
}
// [아무것도 아닙니다]