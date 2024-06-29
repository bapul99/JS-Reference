// 2. 문자 데이터 타입 : string (문자열 = 문자의 나열)
// ' ' = " "
// [hello world! string]
let str = "hello world!";
console.log(str);
console.log(typeof str);


// 2-1 문자열 길이 확인하기
// [12]
console.log(str.length);

// 2-2 문자열 결합하기
// [hello, world!]
let str1 = "hello, ";
let str2 = "world!";
let result = str1.concat(str2);
console.log(result);

// 2-3 문자열 자르기
let str3 = "hello, world!";
console.log(str3.substr(7, 5)); // 7번째 부터 5번째까지만 출력해줘 [world]
console.log(str3.slice(7, 12)) // 7번째 부터 12번째까지 출력해줘 [world]

// 2-4 문자열 검색
let str4 = "hello, world!";
console.log(str4.search("world")); // world 가 시작되는 지점 [7]

// 2-5 문자열 대체
let str5 = "hello, world!";
let result01 = str5.replace('world', "javascript") // world 를 javascript 로 바꿔줘 [hello, javascript!]
console.log(result01);

// 2-6 문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(","); // () 안에 기준으로 분류해줘 ['apple', 'banana', 'kiwi']
console.log(result02); 