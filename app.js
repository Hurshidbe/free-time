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

//// 8
// function findUniq(arr) {
//     const bigOne = Math.max(...arr)
//     const smallOne = Math.min(...arr)
//     const forResult =[]
//     for (let i=0;i<3;i++){
//         if (arr[i]===smallOne) forResult.push(arr[i])
//     }
//     if (forResult.length>1) {console.log(bigOne)}else {
//     console.log(smallOne)}
// }
// findUniq([0,0,0,0,3])


// //9
// function DNAtoRNA(dna) {
//     let result =[]
//     for (let i=0;i<dna.length;i++){
//         if (dna[i]==='T'){ result.push('U')}else {
//         result.push(dna[i])}
//     }
//     return result.join('')
// }
// DNAtoRNA("GCAT")

// // 10
// function towerBuilder(n) {
//     let arr = []
//     for (let i=1; i<=n; i++)arr.push(' '.repeat(n-i)+'*'.repeat(i*2-1)+' '.repeat(n-i))
//     return arr
// }
// towerBuilder(10)

// // 11
// function greet (name, owner) {
//     if (name===owner) return 'Hello boss'
//     return 'Hello guest'
// }

// // 12
// function findAverage(array) {
//     if (array.length===0) return 0
//     let sum =0
// for (let i=0; i<array.length; i++){sum+=array[i]}
//     console.log(sum/array.length);
// }
//
// findAverage([-1,2,3,4,5])

// // 13
// function lovefunc(flower1, flower2){
// return (flower1 + flower2) % 2 == 1;
// }


// // 14
// // You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// //
// //     If the string's length is odd, return the middle character.
// // If the string's length is even, return the middle 2 characters.
// function getMiddle(s) {
//      const arr = s.split('')
//     if (arr.length%2!==0)
//         return arr[arr.length/2-0.5]
//         return `${arr[arr.length/2-1]}${arr[arr.length/2]}`
// }
// getMiddle('mohina')

// // 15
// // Make a program that filters a list of strings and returns a list with only your friends name in it.
// //     If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// function friend(friends){
//     const result =[]
//     for(let i=0; i<friends.length; i++){
//         if (friends[i].length===4)result.push(friends[i])
//     }
//     return result
// }
// friend(["Ryan", "Kieran", "Mark"])

// // 16
// // You get an array of numbers, return the sum of all of the positives ones.
// function positiveSum(arr) {
// let sum=0
//     for (let i=0;i<arr.length; i++){
//         if (arr[i]>0) sum+=arr[i]
//     }
//     return sum
// }
// positiveSum([1,2,3,4,5])

// // 17
// function grow(x){
//     let result =1
//     for (let i=0; i<x.length; i++){ result*=x[i]}
//     return result
// }
// grow([1, 2, 3])


