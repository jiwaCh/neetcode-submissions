class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(let i = 0; i < strs.length; i++){
            const sortedValue = strs[i].split('').sort().join('');
            if(map.has(sortedValue)){
                map.get(sortedValue).push(i)
            }else{
                map.set(sortedValue, [i])
            }
        }
        console.log(map)

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
