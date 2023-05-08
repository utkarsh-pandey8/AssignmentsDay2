let numbers = [4, -4, 10, 203, 53, 11]

let minValue = numbers.reduce((index, nextIndex) =>{
    return (index < nextIndex ? index : nextIndex)
})

console.log(minValue)
