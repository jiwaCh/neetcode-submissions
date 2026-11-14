class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for(const str of strs){
            let hash = Array(26).fill(0)
            for(let i = 0; i < str.length; i++){
                hash[str.charCodeAt(i) - "a".charCodeAt(0)]++
            }
            hash = hash.join(",")
            if(!map.has(hash)){
                map.set(hash, [])
            }
            map.get(hash).push(str)
        }

        return [...map.values()]
    }
}
