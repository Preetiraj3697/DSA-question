function runProgram(input) {
    input = input.trim();
    var a = input.split(/[\r\n]+/);
    var b = a[0];
    var num=a[1].split(" ").map(Number);
    var total=0;
    function Isprime(num1)
    {
        // console.log(num1)
        var count=0;
        for(var i=1;i<num1;i++)
        {
            if(num1%i==0)
            {
               count++
            //    console.log(count)
            }
        }
        // console.log(count)
        if(count==1)
        {
            return true;
        }
    }
    
    for (var i=0;i<b;i++)
    {
        // console.log(b)
        for(var j=i;j<b;j++)
        {
            // console.log(b)
            var prime=j-i;
            // console.log(prime)
            if(Isprime(prime))
            {
                //  console.log(i)
                // console.log(j)
                if(num[j]>num[i])
                {
                    var out=num[j]-num[i]
                    total=total+out
                }
                else
                {
                    var out=num[i]-num[j]
                    total=total+out
                }
               
            //    console.log(out)
              
            }

        }
       
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
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});