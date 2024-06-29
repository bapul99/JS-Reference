// 화살표 함수
// ES6 신 문법
function add (x, y) {
  return x, y
}

// 1-1 기본적인 화살표 함수 
let arrowFunc01 = (x, y) => {
  return x + y
}

// 1-2 한 줄로 -> return 문 빼고(중괄호 내 로직이 1개)
let arrowFunc02 = (x, y) => x + y;

function testFunc(x) {
  return x;
}
//화살표 함수로! (매개변수 1개)
let arrowFunc03 = x => x;