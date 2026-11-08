class MyHashMap {
    constructor() {
        this.array = Array.from({length: 10000}, () => [])
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.index(key) === -1){
            this.array[key % 10000].push({
                key : key,
                value : value
            })
        }else{
            this.array[key % 10000][this.index(key)] = {
                key : key,
                value : value
            }
        }

    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.index(key) != -1){
            return this.array[key % 10000][this.index(key)].value
        }

        return - 1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if(this.index(key) != -1){
            this.array[key % 10000].splice(this.index(key), 1)
        }
    }

    index(key){
        return this.array[key % 10000].findIndex((item) => item.key === key)
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
