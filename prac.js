function runProgram(input) {
    input = input.trim();
    var input=input.split(/[\r\n]+/)
    var length=input[0];
    var a=input[1].split("")
    // console.log(a)
    var b=[]
    for(var i=0;i<length;i++)
    {
        var c=a[i];
        if(b[c]==undefined)
        {
            b[c]=1
        }
        else
        {
            var count=b[c];
            b[c]=count+1
        }

    }
    // Object.keys(b).sort().forEach(function(e)
    // {
    //     console.log(e+" "+b[e])
    // })
    
    
  // console.log(b)
    for(key in b)
    {
        console.log(key+ " "+b[key])
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