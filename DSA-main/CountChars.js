function runProgram(input) {
    input=input.trim()
    var count=1;
    var str=""
    for(var i=0;i<input.length;i++)
    {
       
        if(input[i]==input[i+1])
        {
            count++
        }
        else if(input[i]!=input[i+1])
        {
            str=str+input[i]+count
            count=1       
        }
    }
    console.log(str)


}
if (process.env.USER === "kaustubhmendhe") {
 runProgram(`aaabbbbcc`);
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