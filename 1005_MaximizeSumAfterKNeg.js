/*
1005 Maximize Sum of Array after K Negation

Given an array A of integers, we must modify the array in the following way: we choose an i and replace A[i] with -A[i], and we repeat this process K times in total.  (We may choose the same index i multiple times.)

Return the largest possible sum of the array after modifying it in this way.



Example 1:

Input: A = [4,2,3], K = 1
Output: 5
Explanation: Choose indices (1,) and A becomes [4,-2,3].
Example 2:

Input: A = [3,-1,0,2], K = 3
Output: 6
Explanation: Choose indices (1, 2, 2) and A becomes [3,1,0,2].
Example 3:

Input: A = [2,-3,-1,5,-4], K = 2
Output: 13
Explanation: Choose indices (1, 4) and A becomes [2,3,-1,5,4].
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

var largestSumAfterKNegations = function(A, K) {
    A.sort((a,b)=>a-b);
    let i=0;
    while(i<A.length && K>0){
        if(A[i]<0) {
            A[i]=-A[i];
            i++;
            K--;
        } else break;
    }
    if(i==0 && K%2===1) A[0]=-A[0];
    else if(K%2===1){
        if(A[i]<A[i-1]){
            A[i]=-A[i]
        }else{
            A[i-1]=-A[i-1];
        }

    }
    let sum=A.reduce((total,curr)=>total+curr,0)
    return sum;
};