// for, while => ~동안 : 반복문

// while문
// while문은 조건이 참일때만 실행되기 때문에 조건이 거짓이 되도록 만들어줘야함

while (조건) {
     // 실행문
     // 증감
    }

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

// while문을 활용해서 3초과 100미만의 숫자 중 5의 배수만 출력
let j = 3;
while (j < 100) {
    if (j % 5 === 0) {
        console.log(j);
    }
    j++;
}

// do while문

let k = 0;

do {
    console.log(k);
    k++;
} while (k < 10);

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9


// for문
for (초기값; 조건; 증감) {
     //실행문   
}


// i 라는 변수는 0부터 시작해서 10보다 작을때까지 1씩 증가하면서 반복
for (let i = 0; i < 10; i++) {
    console.log("i =>", i);
} 
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 

// break, continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log("i =>", i);
}
// 0, 1, 2, 3, 4 (5에서 break가 걸려서 종료)

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log("i =>", i);
}

// 0, 1, 2, 3, 4, 6, 7, 8, 9 (5에서 continue가 걸려서 5만 제외하고 출력)                                                                           