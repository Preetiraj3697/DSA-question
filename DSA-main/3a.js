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
        var SUM = 0;
        for (let j = 0; j < el; j++) {
            var flag = false;
            var  counter = 0
            for (let k = j + 1; k < el; k++) {
                if (str[j] < str[k] && counter == 0) {
                   // console.log(str[j],str[k])
                    flag = true;
                    counter++
                }
              var   counter2=0
                if (flag === true) {
                    for (let l = k + 1; l < el; l++) {
                        if (str[k] > str[l]&&counter2==0) {
                           // console.log(str[k],str[l])
                            SUM += str[l]
                            counter2++
                            break;

                        }
                    }
                }
                if (flag == true) {
                    break;
                }
            }
            if (flag == false) {
                SUM += -1
            }
        }
        console.log(SUM)
    }
}
if (process.env.USER === "kaustubhmendhe") {
    runProgram(`2
     6
     5 1 6 2 5 1
     5
     2 3 5 1 9`);
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