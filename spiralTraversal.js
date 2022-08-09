// Spiral Traversal IV Ended
// Description

// You are given a square matrix of size N x N.

// You have to print the spiral traversal of the matrix.

// Refer the figure given below for better understanding.

// Screenshot (113).png


// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case contains N, the size of the matrix.

// The next N lines contain N integers each denoting the values of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 500

// 1 <= A[i][j] <= 500


// Output
// For each test case, print the spiral traversal of the matrix, as shown in the problem description, on a single line, on a new line.



// Sample Input 1 

// 1
// 3 
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 9 6 3 2 1 4 7 8 5
// Sample Input 2 

// 2
// 3
// 5 4 3
// 6 9 2
// 7 8 1
// 2
// 1 2
// 3 4
// Sample Output 2

// 1 2 3 4 5 6 7 8 9 
// 4 2 1 3 
// Hint

// The spiral traversal for a given matrix is shown in the image in the problem description.

function spiralTraversalIV(N, arr){
    //write code here
    
      let left=0;
  let right=arr.length-1;
  let top=0;
  let bottom=arr.length-1;
  let count=0;
  let bag="";
  while(count<N*N){
  for(i=bottom; i>=top; i--){
      bag+=(arr[i][right])+" ";
        count++;
  }
  right--;
  for(i=right; i>=left; i--){
      bag+=(arr[top][i])+" ";
        count++;
  }
  top++;
  for(i=top; i<=bottom; i++){
      bag+=(arr[i][left])+" ";
      count++;
  }
  left++;
  for(i=left; i<=right; i++){
      bag+=(arr[bottom][i])+" ";
      count++;
  }
  bottom--;
   
}
  console.log(bag);
}

let N=3;
let arr=[[1,2,3],
         [4,5,6],
         [7,8,9]]


spiralTraversalIV(N,arr);