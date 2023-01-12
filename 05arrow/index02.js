//forEach( 콜백함수,thisArg :옵션 )
//forEach( funtion(현재값,인덱스,현재배열){} ,thisArg )

//반복돌려서 값 가져오기
let arr = ["a", "b", "c", "d"];

// arr.forEach(function(value, index, arr){
//     console.log("값: " + value + ", 인덱스: " + index + ", 현재배열: " + arr);
// });
// //익명함수는 이와같이 사용할 수 있다.
// arr.forEach( (value,index,arr) => {
//     console.log(`값${value}, 인덱스${index}, 현재배열${arr}`);
// } );


// //value의 값만 받아오기
// arr.forEach(function(value){
//     console.log(value);
// });
// arr.forEach( value => console.log(value) );





//filter - 콜백에 리턴이  true인 값을 이용해서 새로운 배열을 반환
//filter( 콜백함수(값,인덱스,현재배열), thisArg )
let arr2 = [1,2,3,4,5,6,7,8,9,10];

// let result = arr2.filter(function(value, index, arr){
//     // console.log(value, index, arr);
//     return value % 2 == 0;
// });

// console.log(result);

// let result = arr2.filter((a)=> a % 2 == 0);
// console.log(result);

// 배열요소중에 o가 들어간 문자열만 필터링
// let arr3 = ["melon", "apple", "orange", "grape", "mango"];

// let result =  arr3.filter((value)=>value.indexOf("o") != -1);
// console.log(result);








//map함수 - 실행한 결과를 가지고 새로운 배열을 만들 때 사용한다.
// let arr4 = [1,3,5,7,9];

// let result = arr4.map(function(a,b,c){
//     return a+1;
// });
// console.log(result); // [ 2, 4, 6, 8, 10 ]
// //위랑 동일한 값
// arr4.map((a)=>a+1);

let arr3 = ["melon", "apple", "orange", "grape", "mango"];
let result = arr3.filter((value)=>value.indexOf("o") != -1);
// console.log(a);
let result2 = result.map(function(a,b){
    return `o가 들어간 과일 중 ${a}는 ${b+1}번째 입니다.`;
});
console.log(result2);