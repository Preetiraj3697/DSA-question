// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    //console.log(input)
    let test=input[0]
    let line =1
    for(let i=0;i<test;i++)
    {
        const [el,target]=input[line++]
        const arr=input[line++]
        //console.log(el,target,arr)
        console.log(isSubarray(el,target,arr))
    }
    function isSubarray(el,target,arr)
    {
        let start=0;
        let sum=0;
        for(let i=0;i<el;i++)
        {
            while(sum > target && start < i-1){
                sum = sum - arr[start];
               
                start ++;
            }
            if(sum == target || arr[i] == target){
                return "Yes";
            }
            if(i < arr.length){
                sum = sum + arr[i];
            }
        }
        return "No"

    }

}

if (process.env.USER === "kaustubhmendhe") {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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