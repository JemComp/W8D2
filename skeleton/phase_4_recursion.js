
range = function(start, end) {
    if (start === end) {
        return [start]
    }

    return [start].concat(range(start+1, end))
}

function sumRec(arr) {
    if (arr.length === 0) {
        return 0
    }

    return arr.pop() + sumRec(arr) 
}

function exponent(base, exp)
{
    if (exp === 0) {
        return 1
    }

    return exponent(base, exp-1) * base
}

function fib(n) {
    if (n < 1 ) {
        return 0;
    } else if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1, 1];
    }

    let fibseq = fib(n-1);
    const last = fibseq[fibseq.length-1];
    const last2 = fibseq[fibseq.length - 2];
    fibseq.push(last+last2);
    return fibseq;
}

function deepDupe(arr) {
    let dupeArr = [];

    if (!Array.isArray[arr]) {
         return arr;
    }

    console.log(arr[i])
    console.log(dupeArr)
    for(i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            deepDupe(arr[i])
        } else {
            dupeArr.push(arr[i])
        }
    }

    return dupeArr
}

// console.log(sumRec([1,2,3,4,5]))
console.log(deepDupe([1,[2,3,[4],5,6,],7,8]))
