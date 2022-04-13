Array.prototype.bubblesort = function(){
    let sorted = false

    while (!sorted) {
        sorted = true
  
        for (i=0; i < this.length-1; i++) {
            if (this[i] > this[i+1]) {
                const temp = this[i]
                this[i] = this[i+1]
                this[i+1] = temp
                sorted = false
            }

        }
    }
    return this
}


String.prototype.substrings = function() {
    let arr = [];
    for (i=0; i < this.length; i++) {
        for (j=i+1; j <this.length+1; j++) {
            arr.push(this.slice(i,j))
        }
    }
    return arr
} 