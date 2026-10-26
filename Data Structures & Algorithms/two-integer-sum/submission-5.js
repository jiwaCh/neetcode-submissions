class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map(nums.map((value, key)=>[value, key]))
        for (const [num, key] of map){
            const _find = target - num
            if(map.has(_find)){
                return [key, map.get(_find)]
            }
        }
    }
}
