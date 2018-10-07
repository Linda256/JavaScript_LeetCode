/*
918. Maximum Sum Circular Subarray
User Accepted: 590
User Tried: 1425
Total Accepted: 599
Total Submissions: 3411
Difficulty: Medium
Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)



Example 1:

Input: [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3
Example 2:

Input: [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10
Example 3:

Input: [3,-1,2,-1]
Output: 4
Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4
Example 4:

Input: [3,-2,2,-3]
Output: 3
Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3
Example 5:

Input: [-2,-3,-1]
Output: -1
Explanation: Subarray [-1] has maximum sum -1


Note:

-30000 <= A[i] <= 30000
1 <= A.length <= 30000
*/

//method1 naive method, O(n*n)
var maxSubarraySumCircular = function(A) {
    let len=A.length;
    A.push(...A);
    console.log(A);
    let count=0;
    let maxSum=A[0];
    for (let i=0;i<A.length-1;i++){
        currSum=A[i];
        count++;
        for (let j=i+1;j<A.length;j++){
            currSum=currSum+A[j];
            count++;
            maxSum=Math.max(Math.max(currSum,A[j]),maxSum);
            if(count===len) {
                count=0;
                break;
            }
        }
    }
    return maxSum;;
}

let arr=[2,-2,2,7,8,0];
//let arr=[5,-3,5];
//let arr=[-2,-3,-1];
console.log(maxSubarraySumCircular(arr));