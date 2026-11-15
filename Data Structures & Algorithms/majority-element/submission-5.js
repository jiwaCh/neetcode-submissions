class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let cand = nums[0]
        let count = 0

        for(const num of nums){
            if(count === 0){
                cand = num
                count++
                continue
            }
            count--
        }

        return cand

    }
}
