let arr = [1,44,21,54,78,11,13,50,51]
const sumEvens = (a) =>{
    let sum = 0
    a.forEach((element, index, a) => {
        if(element%2 == 0)
        sum = sum + element
    });
    return sum
}

let sumArray = sumEvens(arr)
console.log(sumArray)