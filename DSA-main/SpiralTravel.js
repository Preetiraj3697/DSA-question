// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    // console.log(input)
    let test = input[0]
    input.shift()

    for (let i = 0; i < test; i++) {
        let [row, col] = input[0]
        input.shift()
        var result = "";
        let left = 0;
        let top = 0;
        let right = col - 1;
        let bottom = row - 1;
        let direction = "up"

        while (left <= right && top <= bottom) {
            if (direction === "right") {
                for (let j = left; j <= right; j++) {
                    result +=input[top][j]+" "
                }
                top++;
                direction = "down"
            }
            else if (direction === "down") {
                for (let j = top; j <= bottom; j++) {
                    result +=input[j][right]+" "
                }
                right--;
                direction = "left"
            }
            else if (direction === "left") {
                for (let j = right; j >= left; j--) {
                    result +=input[bottom][j]+" "
                }
                bottom--;
                direction = "up"
            }
            else if (direction === "up") {
                for (let j = bottom; j >= top; j--) {
                    result +=input[j][left]+" "
                }
                left++;
                direction = "right"
            }
        }
        console.log(result)
        for (let j = 0; j < row; j++) {
            input.shift()
        }
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