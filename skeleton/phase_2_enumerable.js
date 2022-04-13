
Array.prototype.myEach = function(callback) {
    for(i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function(callback) {
    let arr = [];
    this.myEach(ele => arr.push(callback(ele)) );
    return arr;
}

Array.prototype.myReduce = function(callback, initialValue) {
    let arr = this;
    let acc = initialValue
    if (initialValue === undefined) {
        acc = this[0]; 
        arr = arr.slice(1);
    }
    arr.myEach( (ele) => acc = callback(acc, ele) );
    return acc;
};


console.log([1,2,3].myReduce((acc, ele) => acc + ele, 4 ));