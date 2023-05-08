let list = [1,2,3,4,5,6,7,8,9,10]
let newList = []

newList = list.map((element, index, prices) => {
    return element*10
}
);

console.log(newList)