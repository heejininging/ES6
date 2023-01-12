// var a = function(){
//     console.log("a실행");
// }

let a = () => {
    console.log("a실행");
}
a(); //a실행

//코드가 1줄이면 {} 생략이 됩니다. {}를 생략하면 자동으로 return이 붙습니다.
let b1 = () => console.log("b실행");
b1(); //b실행

let b2 = (a,b,c) => a+b+c;
console.log(b2(1,2,3)); //6

let b3 = (a=10) => a + 100;
console.log(b3()); //110
console.log(b3(20)); //120

let c1 = a => a +10;
console.log(c1(10)); //20

//객체를 반환할 때는 ()로 묶어줍니다.

// let c2 = () => {
//     return {key : 1, age : 20}
// };
let c2 = () => ({key :1 , age : 20})
console.log(c2());

//
// setInterval(function(){
//     console.log(1);
// },1000);

setInterval(()=> console.log(1),1000);
