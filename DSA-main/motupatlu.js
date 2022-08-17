function runProgram(input){
    
    input=input.trim();
    input=Number(input)
        if(input>5)
       {
        var num2=input/5
        num2=Math.floor(num2)
        if(input%5==0)
        {
            var total=num2
        }
        else
        {
            var  total=num2+1
        }
        
       }
       else
       {
         var total=1
       }  
    console.log(total)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});