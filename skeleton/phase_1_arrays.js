Array.prototype.uniq = function(){
    let arr =[];
    this.forEach((ele) => {
        if (!arr.includes(ele)) {
            arr.push(ele)
        }

    });
    return arr;
};

Array.prototype.twoSum = function(){
    let arr = [];
    for(let i = 0; i < this.length - 1 ; i++) {
        let num1 = this[i]
        for (let j = i + 1; j < this.length; j++) {
        
            let num2 = this[j]
            if (num1 + num2 === 0) {
                arr.push([i,j])
            }
        }
    }
    return arr
};

Array.prototype.transpose = function() {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        let columns = [];
        for(let j=0; j < this.length; j++) {
            columns.push(this[j][i])
        }
        arr.push(columns)
    }
    return arr
}

console.log([[1,2,3],[4,5,6],[7,8,9]].transpose())