function runProgram(input) {
    input = input.trim().split('\n')
  
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    // console.log(input)
    const el = input[0]
    const arr = input[1]
    if(isRotated(arr, el))
    {
        console.log("YES")
    }
    else
    {
        console.log("NO")
    }
}
function findPivot(arr, low, high)
{
    // Base cases
    if (high < low)
        return -1;
    if (high == low)
        return low;
 
    var mid = parseInt((low + high) / 2);
    if (mid < high && arr[mid + 1] < arr[mid])
    {
        return mid;
    }
 
    // Check if element at (mid - 1) is pivot
    // Consider the cases like {4, 5, 1, 2, 3}
    if (mid > low && arr[mid] < arr[mid - 1])
    {
        return mid - 1;
    }
 
    // Decide whether we need to go to
    // the left half or the right half
    if (arr[low] > arr[mid])
    {
        return findPivot(arr, low, mid - 1);
    }
    else
    {
        return findPivot(arr, mid + 1, high);
    }
}

// Function to check if a given array
// is sorted rotated or not
function isRotated(arr, n)
{
    var l = 0;
    var r = n - 1;
    var pivot = -1;
    if (arr[l] > arr[r])
    {
        pivot = findPivot(arr, l, r);
        var temp=pivot;
        // To check if the elements to the left
        // of the pivot are in descending or not
        if (l < pivot)
        {
            while (pivot > l)
            {
                if (arr[pivot] < arr[pivot - 1])
                {
                    return false;
                }
                pivot--;
            }
        }
 
        // To check if the elements to the right
        // of the pivot are in ascending or not
         
        else
        {
            pivot=temp;
            pivot++;
            while (pivot < r) {
                if (arr[pivot] > arr[pivot + 1]) {
                    return false;
                }
                pivot++;
            }
        }
 
        // If both of the above if is true
        // Then the array is sorted rotated
        return true;
    }
 
    // Else the array is not sorted rotated
    else {
        return false;
    }
}
if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`4
    3 4 5 9 1`)
  } else {
    process.stdin.resume()
    process.stdin.setEncoding('ascii')
    let read = ''
    process.stdin.on('data', function (input) {
      read += input
    })
    process.stdin.on('end', function () {
      read = read.replace(/\n$/, '')
      read = read.replace(/\n$/, '')
      runProgram(read)
    })
    process.on('SIGINT', function () {
      read = read.replace(/\n$/, '')
      runProgram(read)
      process.exit(0)
    })
  }