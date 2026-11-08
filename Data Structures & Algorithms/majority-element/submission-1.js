class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0
        let candidate = null
        for (const num of nums){
            if(num === candidate){
                count++
            }else if(count > 0){
                count--
            }else{
                candidate = num
                count++
            }
        }
                    return candidate
    }

}
