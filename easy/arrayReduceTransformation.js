const reduce = function (nums, fn, init) {
    if (nums.length === 0) {
        return init
    }
    let res = init
    for (let i = 0; i < nums.length; i++) {
        res = fn(res, nums[i])
    }
    return res
}


const nums = [1, 2, 3, 4]
const fn = function sum(accum, curr) {
    return accum + curr;
}
const init = 0

console.log(reduce(nums, fn, init))

const nums2 = [1, 2, 3, 4]
const fn2 = function sum(accum, curr) {
    return accum + curr * curr;
}
const init2 = 100

console.log(reduce(nums2, fn2, init2))

const nums3 = []
const fn3 = function sum(accum, curr) { return 0; }
const init3 = 25

console.log(reduce(nums3, fn3, init3))