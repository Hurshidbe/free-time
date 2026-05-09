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

// // 8
// function sortBy(a, fn) {
//     let arr=[]
//     for (let i=0;i<a.length;i++){
//         arr.push(fn(a[i]))}
//     return arr.sort()
// };
// console.log(sortBy([5,4,1,2,3], (x) => x))

// // 9
// const mergeTwoLists = function(list1, list2) {
//     const merged = [...list1, ...list2]
//     return merged.sort((a,b)=>a-b)
// };

// console.log(mergeTwoLists([1,2,3,4],[1,2,3,5,6,7,8]))

// // 10
// function romanToInt(s){
//     const n =[1,5,10,50,100,500,1000]
//     const r =['I','V','X','L','C','D','M']
//     const s_arr = s.split('')
//     let s_arr_num = []
//     for(let i = 0; i < s_arr.length; i++){
//         const letter = s_arr[i]

//         for(let j = 0; j < r.length; j++){
//             if(letter === r[j]){
//                 s_arr_num.push(n[j])
//             }
//         }
//     }
//     let result = 0
//     for(let i = 0; i < s_arr_num.length; i++){
//         if(s_arr_num[i] < s_arr_num[i + 1]){
//             result -= s_arr_num[i]
//         } else {
//             result += s_arr_num[i]
//         }
//     }
//     return result
// }
// console.log(romanToInt("MCMXCIV"))

// 11
var longestCommonPrefix = function(strs) {
  const result = []
  const first_word = strs[0].split('')
  for (let j = 0; j < first_word.length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== first_word[j]) {
        return result.join('')
      }
    }
    result.push(first_word[j])
  }
  return result.join('')
}