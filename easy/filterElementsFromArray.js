const filter = (arr, fn) => {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            temp.push(arr[i])
        }
    }
    return temp
}

const arr = [1, 10, 14, 20, 40]

const greaterThan10 = function (n) {
    return n > 10
}

const arr1 = [1,2,3]
const fn1 = function firstIndex(n, i) { return i === 0; }

const arr2 = [-2,-1,0,1,2]
const fn2 = function plusOne(n) { return n + 1 }

console.log(filter(arr, greaterThan10))
console.log(filter(arr1, fn1))
console.log(filter(arr2, fn2))
