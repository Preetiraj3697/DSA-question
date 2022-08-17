// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    // console.log(input)
    let test = input[0]
    input.shift()
    for(let i=0;i<input.length;i++)
    {
        const [row,col]=input[i]
        //console.log(row,col)
        var str=""
        let top=i+1;
        let bottom=i+row;
        let right=0;
        let left=col-1;
        while(top<=bottom && right<=left)
        {
            for(let j=top;j<=bottom;j++)
            {
                str+=input[j][right]+" "

            }
            right++

            for(let j=right;j<=left;j++)
            {
                str+=input[bottom][j]+" "
            }
            bottom--;
            if(right<=left)
            {
                for(let j=bottom;j>=top;j--)
                {
                    str+=input[j][left]+" "
                }
                left--;
            }
            if(top<=bottom)
            {
                for(let j=left;j>=right;j--)
                {
                    str+=input[top][j]+" "
                }
                top++
            }

        }
        console.log(str.trim())
        
        i+=row

    }

}

if (process.env.USER === "kaustubhmendhe") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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