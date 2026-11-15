class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let cand = nums[0]
        let count = 0

        for(const num of nums){
            if(num === cand){
                count++
                continue
            }
            if(count >= 0){
                count--
            }

            if(count === -1){
                cand = num
                count = 1
            }
        }

        return cand

    }
}
