class MyHashSet {

    constructor() {
        this.map = []
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(!this.contains(key)){
            this.map.push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.map.findIndex((item)=> item === key)
        if(index > -1){
            this.map.splice(index, 1)
        }

    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return (this.map.some((item)=> item === key)) 
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
