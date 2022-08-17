// function user()
// {
//     console.log(name)
//     console.log(age)
//     var name="mee"
//     let age=23
// }
// user()
// function x() {
//     console.log( a ); 
// }
// function y() {
//     var a = 3;
//     x();
//     function z(){
//       console.log( a ) 
//     }
//    z()
// }
// var a = 2;
// y();

// function a(x,y,...z)
// {
//     return z
// }
// var res=a(...[1,2,3,4])
// console.log(res)
// "use strict"

// const nam="mm"
// function p()
// {
//     console.log(nam)
//     nam="ss"
// }
// p()
// console.log(nam)


// var arr = [];

// for (var i = 0; i < 3; i++) {
//     arr[i] = function getArr(){
//         return i;
//     };
// }

// arr[0]();  
// arr[1]();  
// arr[2]();


// const a=[1,2,3]
// a=a.map(function(z)
// {
//     z+10
// })
// console.log(a)

const sum=(x,y)=>{
    x=x&&5
    y=y||5
    return x+y
}
sum(20,5)