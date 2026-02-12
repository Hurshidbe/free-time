// // 1
// function twoSum(n,t) {
//     for(let i=0;i<n.length;i++) {
//         const q= t-n[i];
//         for(let j=i+1;j<n.length;j++) {
//             if(n[j]===q) return [i,j];
//         }
//     }
// }
// console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]

// // 2
// function isPalindrome(n){
//     return n.toString() === n.toString().split('').reverse().join('')
// }
// console.log(isPalindrome(111111))