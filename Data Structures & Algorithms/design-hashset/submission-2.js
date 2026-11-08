class MyHashSet {
    constructor() {
        this.array = Array.from({ length: 10000 }, () => []);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(!this.contains(key)){
            this.array[key % 10000].push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
       if(this.contains(key)){
            this.array[key % 10000].splice(this.array[key % 10000].indexOf(key),1)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.array[key % 10000].includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
