println(powerNo(3, 2));

function powerNo(n, m)
{
    if (m == 0)
        return 1;

    if (m == 1)
        return n;

    return n * powerNo(n, m - 1);
}