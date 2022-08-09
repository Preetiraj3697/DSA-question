// Description

// Given an array, A, of N integers, print the of average of numbers present in given array


// Input
// Input Format:

// The first line contains an integer, N (the number of integers in A).

// The second line contains N space separated integers describing A.

// Constraints:

// N<100


// Output
// Print an integer which is ceil of average of integers present in array


// Sample Input 1
// 3
// 1 2 3
// Sample Output 1
// 2

//*************************************SOLUTION******************************************************* */

function MasaiAverage(N,arr){
    
    let sum=0;
    for(let i=0; i<N; i++){
        sum+=arr[i]
    }
    let average = Math.ceil(sum/N)
    console.log(average)
}

MasaiAverage(3,[1,2,3])
