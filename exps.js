// const arr = ['sda', 235, {a: 'v'}]
// const str = 'hello'
// const ob = {
//     name: 'hh',
//     age: 5,
//     timestamp: '1235435'
// }
//
// for (let i = 0; i < arr.length; i++) {
//     arr[i]
// }

// for (const item of arr) {
//     console.log({item})
// }
//
// for (const item in arr) {
//     console.log({item})
// }

// for (const item of str) {
//     console.log({item})
// }
//
// for (const item in str) {
//     console.log({item})
// }

// for (const key in ob) {
//     console.log(key, ob[key])
// }
//
// for ... of ...
// for ... in ...
// console.log(correct('105_hello'))
//
// const xx = [
//     {}, 'asd', 51273
// ]


//                                  array splice vs array slice


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






// var maxSequence = function(arr){
//     var max = 0;
//     var cur = 0;
//     arr.forEach(function(i){
//         cur = Math.max(0, cur + i);
//         max = Math.max(max, cur);
//         console.log(`cur : ${cur}, max : ${max}`)
//     });
//     return max;
// }



// var maxSequence = function(arr){
//     var maxSum = 0;
//     var currentSum = 0;
//
//     for (var i = 0; i < arr.length; i++) {
//         currentSum += arr[i];
//
//         if (currentSum <= 0) {
//             currentSum = 0;
//         }
//         maxSum = Math.max(maxSum, currentSum);
//         console.log({currentSum, maxSum})
//
//     }
//
//     return maxSum;
// }
//
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, 5, 4]))

//should learm map and set


// function adder(a,b){
//     return doner(a,b)
// }
//
// function doner(a,b){
//     return a+b
// }
//
// console.log(adder(3,4))

// const arr =[1,2,3,4,5,6]
// let result=[]
//
// arr.forEach(val=>result.push(val+1))
// console.log(result)

// const numbers = [2,5,6,8,65,7]
//
// function square(num){
//     return num**2
// }
//
// const  daraja = numbers.map(square)
// console.log(daraja)


// function name_length(names){
//     return names.map(n=>n.length)
// }
// console.log(name_length(['Nic','Daniel','Hero','Hayzenburger']))
//
// let raqamlar = new Set()
// raqamlar.add(1)
// raqamlar.add(2)
// raqamlar.add(3)
// raqamlar.add(4)
// raqamlar.add(4)
// console.log([...raqamlar][0])


let products = new Map()
products.set('Hurshid', {'age' : 20, 'height' : 180})
products.set('Mustafo', {'age' : 27, 'height' : 185})
products.set('Ayubxon', {'age' : 27, 'height' : 175})
products.set('Orifjon', {'age' : 27, 'height' : 174})

// const arr = [...products]
// const result = []
// products.forEach((val, key) => {
//     console.log(key, val)
// })
// console.log(products)
//
// for (const index of products){
//     console.log(index, products[index])
//     // if (arr[index][1]['height']<180){result.push(arr[index])}
// }
// let arr = [1, 2, 3, 4]
// let updated =
// console.log(arr.map(x => {
//     if (x > 3) {
//         return x
//     }
//
//     return
// }))
// // console.log(updated)
// // console.log(result)
//
// const y = x => console.log(x)
// // console.log(console.log('3'))
// y(3)


// const numbers =[1,2,3,5,5,8,45,45,5,4,56,45,45,45,12,12,45,45,45,45,646,64,4]
// console.log(new Set(numbers))

// const example =new Map()
// example.set('Hurshidbek' , {age : 20, height : 180})
// example.set({ name : 'Mustafo', surname : 'Mamajonov'} , {age : 27, height : 185})
// example.set({ name : 'Ayubxon', surname : 'Bodirxonov'} , {age : 27, height : 178})
//
// console.log(example.get('Hurshidbek'))


// let numbers = [789,56,456,213,15,23,3,56,2,1]
// const sorted = numbers.sort((a) => a-1)
// console.log(sorted)

// let chars ='qwertyuoplkjhgfdsazxcvbnm'
//
// console.log(chars.split('').sort())

// const partners =[
//     {name : 'Mustafo', age: 27},
//     {name : 'Orifjon', age: 25},
//     {name : 'HojiAka', age: 34}
// ]
//
// const sorted= partners.sort((a,b)=>a.name.localeCompare(b.name))
// // const  sorted= partners.sort((a,b)=>b.age-a.age)
// console.log(sorted)

// const product =[
//     {name : 'milk' , price : 5000},
//     {name : 'bread' , price : 3000},
//     {name : 'cake' , price : 100000},
//     {name : 'meat' , price : 120000},
//     {name : 'potato' , price : 7000},
//     {name : 'tomato' , price : 35000},
//     {name : 'apple' , price : 15000}
// ]
// const lowToHigh = product.sort((a, b) => a.price - b.price);
// // const AtoZ = product.sort((a, b)=>a.name.localeCompare(b.name))
//
// console.log(lowToHigh)
// // console.log(AtoZ)

// const product =[
//     {name : 'milk' , price : 5000},
//     {name : 'bread' , price : 3000},
//     {name : 'cake' , price : 100000},
//     {name : 'meat' , price : 120000},
//     {name : 'potato' , price : 7000},
//     {name : 'tomato' , price : 35000},
//     {name : 'apple' , price : 15000}
// ];
//
// const numbers =[456,46,456,15,15,48,153,15,484,6515,1]
//
// console.log(numbers.reduce((a,b)=>a+b))

// const array = [
//     [1,2,3,4,5],
//     [4,5,6,6,7],
//     [7,8,9,7,8],
//     [1,2,4,6,0],
//     [7,1,8,0,9],
// ]

// const result = []

// for (let x = 0; x < array.length; x++) {
//     for (let y = 0; y < array[x].length; y++) {
//         // right
//         if (x === 0) {
//             result.push(array[x][y])
//         }

//         // left
//         if ((x === array.length - 1)) {
//             result.push(array[x][array.length - 1])
//         }

//         if ((x !== 0) && (x !== array.length - 1)) {
//             result.push(array[x][array.length - 1-y])
//         }

//     }


//     // down
//     if ((x !== 0) && (x !== array.length - 1)) {
//         result.push(array[x][array.length - 1])
//     }


//     //up
//     if ((x !== 0) && (x !== array.length - 1)) {
//         result.push(array[array.length - 1 - x][x])
//     }
// }

// console.log(result)


// @Get('/api/books')
// export class getbooks() {
//     const start = Date.now()
//     await bookservice.getbook(filter);
//     console.log(Date.now() - start)
//     retrun
// }

// @Get('/api/books-cached')
// export class getbooks() {
//     redis
//     // await bookservice.getbook(filter);
//     // retrun
// }

