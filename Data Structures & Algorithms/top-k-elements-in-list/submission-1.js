class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()

        for(const num of nums){
            map.set(num, (map.get(num)??0)+1)
        }

        const array = new Array(nums.length)

        for(const [key, value] of map){
            array[value] = key
        }

        const ans = []
        for(let i = array.length - 1; i >= 0; i--){
            if(array[i] !== undefined){
                ans.push(array[i])
            }
            if(ans.length === k){
                break;
            }
        }

        return ans




    }
}
