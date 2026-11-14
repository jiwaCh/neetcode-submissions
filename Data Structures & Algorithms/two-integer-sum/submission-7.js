class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()

        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            if(!map.has(num)){
                map.set(num, [])
            }
            map.get(num).push(i)
        }

        for(let i = 0; i < nums.length;i++){
            const t = target - nums[i]
            const val = map.get(t).find((j)=> j != t)
            if(val !== undefined){
                return [i,val]
            }
        }

    }
}
