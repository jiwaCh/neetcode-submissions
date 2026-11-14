class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

        for(let i = 0; i < nums.length; i++){
            map.set(nums[i],i)
        }

        for(let i = 0; i < nums.length; i++){
            const t = target - nums[i]
            if(map.has(t) && map.get(t) != i){
                return [i, map.get(t)]
            }
        }




    }
}
