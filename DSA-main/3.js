// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    //   console.log(input)
    const test = input[0]
    var line = 1
    for (let i = 0; i < test; i++) {
        const el = input[line++]
        const str = input[line++]
        //  console.log(el,str)
        var sum = 0;
        for(let j=0;j<el;j++)
        {
            //console.log(str[j])
           var counter=0
        for(let k=j+1;k<el;k++)
        {
            if(str[j]<str[k]&&counter==0)
            {
              counter++
            //  console.log("k="+str[k])
            var counter2=0
            for (let l = k + 1; l < el; l++) {
                if (str[k] > str[l]&&counter2==0) {
                   // console.log("l="+str[l])
                    sum += str[l]
                    counter2++
                    break;
                }
            }
            }
        }
        if(counter==0)
        {
            sum+=-1
           // console.log("j="+str[j])
        }
        }
        console.log(sum)
    }
}
if (process.env.USER === "kaustubhmendhe") {
    runProgram(`1
     6
     5 1 6 2 5 1`);
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