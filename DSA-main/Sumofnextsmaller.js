// TC=o[n*m]
function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    // console.log(input)
    let test = input[0]
    let line = 1;
    for (let i = 0; i < test; i++) {
        let el = input[line++]
        let arr = input[line++]
        // console.log(el,arr)
        nearSmallSum(el, arr)
    }

}
function nearSmallSum(el, arr) {
    const stack = []
    var sum = 0;
    for (let i = el - 1; i >= 0; i--) {
        if (stack.length === 0) {
            sum += 0
            stack.push(arr[i])
            continue;
        }
        for (let j = stack.length - 1; j >= 0; j--) {
            if (stack[j] < arr[i]) {
                sum += stack[j]
                break
            }
            else {
                stack.pop()

            }

        }

        stack.push(arr[i])

    }
    console.log(sum)
}

if (process.env.USER === "kaustubhmendhe") {
    runProgram(`2
    100
    153 183 189 190 23 20 133 65 153 3 78 190 49 33 127 1 1 4 8 12 15 23 24 31 33 36 37 42 46 47 50 50 52 52 54 54 65 66 66 67 68 68 72 77 80 80 82 85 91 92 93 95 98 99 100 100 100 103 103 104 105 105 105 106 112 115 117 117 121 125 125 126 130 132 136 137 138 141 144 147 147 148 152 152 154 155 158 163 167 168 169 171 173 176 182 183 183 187 192 193
100
181 48 141 197 134 192 18 92 69 107 39 142 182 110 158 133 178 40 76 99 29 87 182 84 46 72 121 31 1 7 8 13 15 15 17 18 18 18 19 25 30 40 43 44 44 44 47 48 50 51 52 55 57 58 60 63 64 65 68 75 75 78 79 82 88 90 90 96 96 97 100 102 104 106 110 115 120 122 123 123 127 127 135 135 140 148 152 156 162 166 171 173 175 177 179 181 184 187 189 200`);
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