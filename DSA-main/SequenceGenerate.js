function runProgram(input) {
    input = input.trim().split("\n")
    let str=input[1].trim()
    let result=""
    getAllSubstrings(str,result);
}
function getAllSubstrings(str,result,i=-1) {
    
    if(i===str.length)
    {   
        return
    }
    if(result!=="")
    {
        console.log(result)
    }
    for(let j=i+1;j<str.length;j++)
    {
        result+=str[j];
        getAllSubstrings(str,result,j)
        result=result.slice(0,result.length-1)
    }
  }

if (process.env.USER === "kaustubhmendhe") {
    runProgram(`4
    abcd`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}