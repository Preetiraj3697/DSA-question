function runProgram(input) {
    var arr=input.split(' ');
    var i =arr[0];
    //var n =parseInt(arr[1]);
    var n=+arr[1]
    
    //var p =parseInt(superd(i))*n;
    var p =+(superd(i))*n;
    console.log(p)
    console.log(superd(p+""));
}
function rep(p){
    var result =0;
    for(var i =0;i<p.length;i++){
        result+=parseInt(p[i]);
   }
    return result;
}
function superd(p){
    if(p.length==1)return p;
    
    return superd(rep(p)+"");
}

 if (process.env.USER === "kaustubhmendhe") {
    runProgram(`148 3`);
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
