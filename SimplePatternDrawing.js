// function runProgram(input) {
//     input = input.trim();
//     input = input.split(" ")
//     var row = input[0];
//     var col = input[1];
//     count = 0;
//     for (var i = 0; i < row; i++) {
//         var str = ""
//         for (var j = 0; j < col; j++) {

//             if (i % 2 == 0) {
//                 str = str + "#"
//             }
//             else if (col % 2 == 1) {
//                 if (count % 2 == 1) {
//                     if (j == 0) {
//                         str = str + "#"
//                     }
//                     else {
//                         str = str + "."
//                     }
//                     count++
//                 }
//                 else if (count % 2 == 0) {
//                     if (j == col - 1) {
//                         str = str + "#"
//                     }
//                     else {
//                         str = str + "."
//                     }
//                     count++
//                 }
//             }
//             else 
//             {
//                 if (count % 2 == 1) {
//                     if (j == 0) {
//                         str = str + "."
//                     }
//                     else {
//                         str = str + "#"
//                     }
//                     count++
//                 }
//                 else if (count % 2 == 0) {
//                     if (j == col - 1) {
//                         str = str + "#"
//                     }
//                     else {
//                         str = str + "."
//                     }
//                     count++
//                 }
//             }



//         }
//         console.log(str)


//     }

// }

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//     read += input;
// });
// process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "")
//     runProgram(read);
// });

// process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "")
//     runProgram(read);
//     process.exit(0);
// });



function runProgram(input) {
    input = input.trim();
    input = input.split(" ")
    var row = input[0];
    var col = input[1];
    count = 0;
    var a="";
    var b="";
    var c="";

    for(var i=0;i<col;i++)
    {
        a=a+"#"
    }
      a=(a)

    for(var i=0;i<col-1;i++)
    {
        b=b+"."
    }
    b=(b+"#")

    for(var i=0;i<col-1;i++)
    {
        c=c+"."
    }
    c=("#"+c)

    for(var i=0;i<row;i++)
    {
        if(i%2==0)
        {
            console.log(a)
        }
        else if(count%2==0)
        {
            console.log(b)
            count++
        }
        else{
            console.log(c)
            count++
        }
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
