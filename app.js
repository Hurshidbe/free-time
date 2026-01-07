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

// // 18
// // Ben has a very simple idea to make some profit: he buys something and sells it again.Of course,
// //     this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead,' +
// // ' he's going to buy it for the lowest possible price and sell it at the highest.
// function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)]
// }

// // 19
// function createPhoneNumber(numbers){
//     return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// }

// // 20
// // Problem
// // Your task is to construct a building which will be a pile of n cubes.
// //     The cube at the bottom will have a volume of n³.
// // The cube above will have a volume of (n − 1)³.
// // The next cube will have a volume of (n − 2)³.
// // And so on, until the top cube which will have a volume of 1³.
// // You are given the total volume m of the building.
// //     Given m, can you find the number n of cubes you will have to build?
// function findNb(m) {
//     let sum =0;
//     for (let i=0; i>=0; i++){
//         sum+=i**3
//         if (sum===m) return console.log(i)
//         if (sum>m) return  console.log(-1)
//     }
// }
// findNb(100)

// // 21
// function sumArray(array) {
//     if (!array||array.length<3) return 0;
//     let sum = 0;
//     for (let i=0; i<array.length; i++) {
//         sum=sum+array[i]}
//     return sum-Math.max(...array)-Math.min(...array);
// }

// // 22
// function removeExclamationMarks(s) {
//     let result = []
//     for(let i=0;i<s.length;i++){
//        if (s[i]!=='!')result.push(s[i])
//     }
//     return  result.join('')
// }
//
// removeExclamationMarks('Hello World!')

// // 23
// function solution(string) {
//     let result = []
//     const lower ='QWERTYUIOPASDFGHJKLZXCVBNM'
//     for (let i=0; i<string.length; i++){
//        if (lower.includes(string[i])){
//            result.push(` ${string[i]}`)
//            i++}
//        result.push(string[i])}
//     return result.join('')
// }
// solution('assalomuAlaykum')

//
//
// //                                   Event-loop
// 7 ta:
// 1.
// 2. process.emit()
// 3. synchron - console.log()
// 4. timeout(() => {}, 0)
// 5. Promise
// new Promise((resolve, reject) => {})
// 6.
// 7. async await


// // 24
// function isValidWalk(walk) {
//     if (walk.length!==10) return false
//     let x=0;
//     let y=0;
//     for (let i=0; i<10; i++){
// if (walk[i]==='n') y=y-1
// if (walk[i]==='w') x=x-1
// if (walk[i]==='e') x=x+1
// if (walk[i]==='s') y=y+1
//     }
//     if(x===0 && y===0) return true
//     return false
// }
// isValidWalk(['n','s','n','s','n','s','n','s','n','s'])

// // 25
// const rps = (p1, p2) => {
//     if (p1===p2) return "Draw!"
//     if(p1 === "scissors" && p2=== "paper") return "Player 1 won!"
//     if(p2 === "scissors" && p1=== "paper") return "Player 2 won!"
//     if(p1 === "scissors" && p2=== "rock") return "Player 2 won!"
//     if(p2 === "scissors" && p1=== "rock") return "Player 1 won!"
//     if(p1 === "paper" && p2=== "rock") return "Player 1 won!"
//     if(p2 === "paper" && p1=== "rock") return "Player 2 won!"
// };

// // 26
// function removeEveryOther(arr){
//        let result =[]
//     for (let i=0;i<arr.length;i=i+2){
//         result.push(arr[i])
//     }
//     return result
// }

// // 27
// function sumMix(x){
// let result = 0;
// for (let i=0;i<x.length;i++){
//     result+=parseInt(x[i])
// }
// return result
// }
// sumMix([9, 3, '7', '3'])

// // 28
// function removeSmallest(n) {
//     let numbers = n
//     let min= Number.MAX_SAFE_INTEGER
//     for (const number of numbers){
//         if (number < min) {
//             min = number
//         }
//     }
//     const idx = numbers.indexOf(min)
//     if (idx > -1) {
//         numbers.splice(idx, 1)
//     }
//     return numbers
// }
// console.log(removeSmallest([5,3,2,1,1,4, 1]))

// function removeBiggest(numbers){
//     let max= Number.MAX_SAFE_INTEGER*(-1)
//     for (const num of numbers){
//         if (num>max){
//             max =num
//         }
//     }
//
//     const index = numbers.indexOf(max)
//     if(index>=0){
//         numbers.splice(index, 1)
//     }
// return numbers
// }
// console.log(removeBiggest([5,1,2,5, 1]))

// // 29
// function correct(string) {
//     let result = []
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === '5') {
//             result.push('S')} else if (string[i] === '0') {
//             result.push('O')} else if (string[i] === '1') {
//             result.push('I')} else {
//             result.push(string[i])}
//     }
//     return result.join('')
// }
// console.log(correct('L0ND0N'))

// // 30
// function points(games) {
//     let score =0
//     for (let i=0; i<games.length; i++){
//         if (games[i][0]>games[i][2]) score+=3
//         else if (games[i][0]===games[i][2]) score+=1
//     }
//     return score
// }
// points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])

// // 31
// function isTriangle(a,b,c)
// {
//     if(a<=0 ||c<=0 ||b<=0 ||a+b<=c ||a+c<=b|| b+c<=a) return false
//     return  true
// }
// console.log(isTriangle(3,3,3))

// 32
// function maxSequence(arr){
//     if (arr.length===0) return 0
//     let biggest = -Number.MAX_VALUE
// for (const index in arr){
//     let sum =0
//     for (let i=0; i<=arr.length; i++){
//         const sliced  = arr.slice(index, i)
//         let ssum =0
//         for (let j=0;j<sliced.length;j++){
//             ssum+=sliced[j]
//         }
//         if (ssum>sum) sum=ssum
//     }
//     if(sum>biggest) biggest=sum
// }
// return biggest
// }
//
// big([-2, 1, -3, 4, -1, 2, 1, -5, 4])

// // 33
// function dirReduce(arr){
//     let box =[]
//     for (let i=0; i<arr.length; i++){
//         if (arr[i]==='NORTH' && box[box.length-1] ==='SOUTH' ||arr[i]==='SOUTH' && box[box.length-1] ==='NORTH') {box.pop()}
//         else if (arr[i]==='WEST' && box[box.length-1] ==='EAST' ||arr[i]==='EAST' && box[box.length-1] ==='WEST') {box.pop()}
//         else {box.push(arr[i])}
//     }
// return box
// }
// console.log(dirReduce(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))

// // 34
//     let txt = 'FUCK YoU'
// String.prototype.isUpperCase = function() {
//     if (this.trim('String: ')===this.toUpperCase()) return true
//         return false
// }
// txt.isUpperCase()

// // 35
// function findShort(s){
//     let smallest = Number.MAX_VALUE
//     for (const word of s.split(' ')){
//         if (word.length<smallest) smallest=word.length}
//     return smallest
// }
//
// console.log(findShort('hello all my name is hurshidbek'))

// // 36
// function countSmileys(arr) {
//     let count = 0;
//     for (const value of arr) {
//         const len = value.length;
//         if (len !== 2 && len !== 3) continue;
//         const eyes = value[0];
//         const nose = len === 3 ? value[1] : '';
//         const mouth = value[len - 1];
//         if (
//             ':;'.includes(eyes) &&
//             (nose === '' || '-~'.includes(nose)) &&
//             ')D'.includes(mouth)
//         ) {count++;}
//     }
//     return count;
// }
// console.log(countSmileys([":->" , ";~D" , ";-(" , ":~>" , ";o)" , ";->" , ";D"]))