class MyHashSet {
    constructor() {
        this.array = Array.from({length: 10000}, () => [])
    }

    hash(key){
        return key % 10000
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(!this.contains(key)){
            this.array[this.hash(key)].push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.array[this.hash(key)].indexOf(key)
        if(index >= 0){
            this.array[this.hash(key)].splice(index, 1)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.array[this.hash(key)].some((i)=>i === key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
