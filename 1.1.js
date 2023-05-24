// Imperative:
function imperativeArray(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]));
    }
    return result;
}
console.log(imperativeArray([10, 8, 13, 15, 2], num => num))

// Declarative:
function declarativeArray(arr, func) {
    return arr.map(func);
}
console.log(declarativeArray([10, 8, 13, 15, 2], num => num))


