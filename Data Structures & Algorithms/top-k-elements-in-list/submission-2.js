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

        const array = Array.from({length: nums.length +1}, ()=>[])

        for(const [key, value] of map){
            array[value].push(key)
        }

        const ans = []
        for(let i = array.length - 1; i >= 0; i--){
            const item = array[i]
            for(const val of item){
                ans.push(val)
            }
            if(ans.length === k){
                break;
            }
        }

        return ans




    }
}
