function runProgram(input) {
    input = input.trim()
    input = input.split(/[\r\n]+/);
    var a = input[0].trim().split(" ");
    var row = a[0]   
    // console.log(a)
    // console.log(row)
    // console.log(col)
    var array=""
    for (var i = 1; i <= row; i++) 
    {
        var arr = input[i]
        //   console.log(arr)
        //   console.log(arr[0])
          array=array+arr[0] +" "
    }
    for(var i=0;i<a[1];i++)
    {
        console.log(array)
    }
   
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});