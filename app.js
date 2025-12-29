////1
// function highAndLow(numbers) {
//     const arr = numbers.split(' ').map(Number);
//     console.log(arr)
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     return `${max} ${min}`;
// }
//
// highAndLow("1 2 3 4 5 -3 -5")

////2
// function nbYear(p0, percent, aug, p) {
// let years = 0
//     while(p0<p){
//     p0+= (p0*percent/100+aug);
//     p0 = Math.floor(p0)
//     years +=1
//     }
//     console.log(years)
// }
//
// nbYear(1000, 2.0, 50, 1214)
//

////3
// function stringToArray(string){
// return string.split(' ')
// }
//
// stringToArray("I love arrays they are my favorite")

////4
// function noSpace(x){
//     let result =''
// for (i = 0; i<x.length; i++){
// if (x[i]!==' ') result+=x[i]
// }
// return result
// }
// noSpace("a a a a")

//5
// function reverseWords(str) {
//     const  arr = str.split(' ')
//     const reversed = []
//     for(let i=0; i<arr.length; i++){
//         reversed.push(arr[i].split('').reverse().join(''))
//     }
//     return reversed.join(' ')
// }
// reverseWords('hello all my name is hurshid')
// // 'its me' ===> split('') => ['i','t','s',' ','m','e']          split(' ') => ['its','me']


// //6
// function deleteNth(arr, n) {
//     const fixed = []
//     const count = {}
//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i]
//         if (!count[num]) {
//             count[num] = 0
//         }
//         if (count[num] < n) {
//             fixed.push(num)
//             count[num]++
//         }
//     }
//     return fixed
// }
// deleteNth([1,2,1,2,1,2,1,2,3,1,3], 1)

// //7
// function humanCount(busStops){
//     let count =0
//     for (let i=0; i<busStops.length; i++){
//         const  human = busStops[i][0]-busStops[i][1]
//         count+=human
//     }
//     if (count<0) console.log('bomagan gap')
//     return count
// }
//
// humanCount([[2,1],[5,6],[7,9]])

//8
// function findUniq(arr) {
//     const bigOne = Math.max(...arr)
//     const smallOne = Math.min(...arr)
//     const forResult =[]
//     for (let i=0;i<3;i++){
//         if (arr[i]===smallOne) forResult.push(arr[i])
//     }
//     if (forResult.length>1) return bigOne
//     return  smallOne
// }

findUniq([0,0,1,0,0])