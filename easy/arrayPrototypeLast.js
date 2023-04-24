Array.prototype.last = function() {
    if (!this.length) {
        return
    }
    return this[this.length - 1]
};

const array = [1, 2, 3, 5]

console.log(array.last())