var sum = addTo(10);
println(sum);

function addTo(n)
{
    if (n == 0)
        return 0;

    return n + addTo(n - 1);
}