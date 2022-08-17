var a=[1,2,3,4,5,6];
a.forEach(function(el)
{
    console.log(el*el)
})
// by using map
// var sq=a.map(function(el)
// {
//     return el*el;
// })
// sq.forEach(function(el)
// {
//     console.log(el)
// })
console.log("")

var double=function(el)
{
    return el*2;
}
var double_num=a.map(double);
console.log(double_num);

console.log("")

var odd=function(el)
{
    return el%2==1;
}
var odd_num=a.filter(odd);
console.log(odd_num)

console.log("")

var product=function(p,e)
{
    return p*e
}
var num_product=a.reduce(product);
console.log(num_product)

console.log("")

var sum=function(a,e)
{
    return a+e;
}
var odd_sum=a.filter(odd).reduce(sum);
console.log(odd_sum)

console.log("")

var multi_3=function(el)
{
    return el%3==0;
}
var cubes= function(el)
{
    return el**3;
}
var multi_3_cub_sum=a.filter(multi_3).map(cubes).reduce(sum);
console.log(multi_3_cub_sum)
