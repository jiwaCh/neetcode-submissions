class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let i = 0; i < strs.length; i++){
            const str = strs[i]
            const hashArray = new Array(26).fill(0)
            for(let z = 0; z < str.length; z++){
                const charInt = str[z].charCodeAt(0) - 97
                hashArray[charInt]++
            }
            const hashKey = hashArray.join(" ")
            if(map.has(hashKey)){
                map.get(hashKey).push(i)
            }else{
                map.set(hashKey, [i])
            }
        }

        // convert map to list
        const answer = []
        for(const [key, value] of map){
            const subArray = []
            for(let i = 0; i < value.length; i++){
                const _value = value[i]
                subArray.push(strs[_value])
            }
            answer.push(subArray)
        }
        return answer

    }
}
