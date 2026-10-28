class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map()

        for(const str of strs){
            const array = new Array(26).fill(0)
            const chars = str.split("")
            for (const char of chars){
                array[char.charCodeAt(0) - "a".charCodeAt(0)]++
            }
            const charKey = array.join(",")
            map.has(charKey) ? map.get(charKey).push(str) : map.set(charKey,[str])
        }

        return [...map.values()]
        
    }
}
