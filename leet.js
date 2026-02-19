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

// // 3
// function twoSum(n,t){
//     for (let index=0; index<n.length; index++){
//         for (let i=0;i<n.length;i++){
//             if (index===i) i=i+1
//             if (n[index]+n[i]===t)
//                 return [index, i]
//         }
//     }
// }
// console.log(twoSum([1,2,3,4],3))

// // 4
// function plusOne(d){
//     let r= []
//     let res= parseInt(d.join(''))
//     const result = (res+1).toString().split('')
//     for (const val of result){
//         r.push(parseInt(val))
//     }
//     return r
// }
// console.log(plusOne([1,2,3,4]))

// // 5
// function addTwoNumbers(x,y){
//     const nx= parseInt(x.toString().split('').reverse().join(''))
//     const ny= parseInt(y.toString().split('').reverse().join(''))
//     const rs= (ny+nx).toString().split('').reverse()
//     let result =[]
//     for (const val of rs){
//         result.push(parseInt(val))
//     }
//     return result
// }
// console.log(addTwoNumbers(11, 12))

// // 6
// var isPalindrome = function(x) {
//     return x.toString().split('')===x.toString().split('').reverse()
// };
// console.log(isPalindrome(121))

// // 7
// function map(arr, fn) {
//     let result =[]
// for (let i=0;i<arr.length;i++){
//     result.push(fn(arr[i], i))
// }
// return result
// }