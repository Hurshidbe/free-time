// function highAndLow(numbers) {
//     const arr = numbers.split(' ').map(Number);
//     console.log(arr)
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     return `${max} ${min}`;
// }
//
// highAndLow("1 2 3 4 5 -3 -5")

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

// function stringToArray(string){
// return string.split(' ')
// }
//
// stringToArray("I love arrays they are my favorite")

function noSpace(x){
    let result =''
for (i = 0; i<x.length; i++){
if (x[i]!==' ') result+=x[i]
}
return result
}
noSpace("a a a a")