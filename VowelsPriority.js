function runProgram(input) {
    // Write code here
    input=input.trim();
    var a=input.split(/[\r\n]+/)
    var first=a[0]

    for ( var i=1;i<=first;i++)
    {
        var string=a[i]
       // console.log(string)
        var str=""
        var str2=""
        for(var j=0;j<string.length;j++)
        {
            if(string[j]=="a"||string[j]=="e"||string[j]=="i"||string[j]=="o"||string[j]=="u")
            {
                str=str+string[j]
            }
            else
            {
                 str2=str2+string[j]
            }
        }
        console.log(str+str2)
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
