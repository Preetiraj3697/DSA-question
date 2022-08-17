var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var n = sum(ar);
println(n);


function sum(ar)
{
    return _sum(ar, ar.length - 1);
}

function _sum(ar, index)
{
    if (index == 0)
        return ar[0];

    return ar[index] + _sum(ar, index - 1);
}