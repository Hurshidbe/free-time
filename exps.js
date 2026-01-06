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



var maxSequence = function(arr){
    var maxSum = 0;
    var currentSum = 0;

    for (var i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum <= 0) {
            currentSum = 0;
        }
        maxSum = Math.max(maxSum, currentSum);
        console.log({currentSum, maxSum})

    }

    return maxSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, 5, 4]))