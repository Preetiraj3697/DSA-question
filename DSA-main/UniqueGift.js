function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0].trim()
    input.shift()
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split("")
    }
    //console.log(input,test)
    for (let i = 0; i < test; i++) {
        let obj = {}
        let stack = []
        let queue = []
        let arr = input[i]
        //  console.log(arr)
        for (let j = 0; j < arr.length; j++) {
            let x = arr[j]
            if (obj[x] === undefined) {
                obj[x] = 1
                queue.push(x)
            }
            else {
                obj[x]++

            }
            for(let k=0;k<queue.length;k++)
            {
                if (obj[queue[0]] > 1) {
                    queue.shift()
                }
            }
            if (obj[queue[0]] > 1) {
                queue.shift()
            }
            if (queue[0]) {
                stack.push(queue[0])
            }
            else {
                stack.push("#")
            }
        }
        console.log(stack.join(""))
    }

}

if (process.env.USER === "kaustubhmendhe") {
    runProgram(`10
        mrqcqjmdkywutarssrdr
        wlrjztufgskxtheovlot
        ifgbmldawzjkvkdfyxnf
        mhnitzndvykekxjemdlm
        rizyephvvxrbjgdhwtho
        xkxpsiiumdtdqhxhgbfh
        jcwpfykhcovvbyidxgaw
        adgkbpcsuqcwjslxyemj
        wsanihzgqqnupbscrkol
        kezfemyaenbdnispjcqc`);
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

// mmmmmmrrrrrrrrqqqqqq
// wwwwwwwwwwwwwwwwwwww
// iiiiiiiiiiiiiiiiiiii
// mmmmmmmmmmmmmmmmhhhh
// rrrrrrrrrriiiiiiiiii
// xxkkkkkkkkkkkkkkkkkk
// jjjjjjjjjjjjjjjjjjjj
// aaaaaaaaaaaaaaaaaaaa
// wwwwwwwwwwwwwwwwwwww
// kkkkkkkkkkkkkkkkkkkk