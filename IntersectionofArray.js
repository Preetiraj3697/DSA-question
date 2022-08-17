function runProgram(input) {
    input = input.trim();
    var a = input.split(/[\r\n]+/);
    var b = a[0];
    var first=a[1].split(" ");
    var second=a[2].split(" ")
    for(var i=0;i<b;i++)
    { 
        for(var j=0;j<b;j++)
        {
            
            if(first[i]==second[j])
            {
                console.log(first[i])
            }
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