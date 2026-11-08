class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        // insertion sort, bad time, but just learning. 
        // space is 0, time is n^2, but best case is 0(n)

        for(let i = 0; i < nums.length; i++){
            let j = i
            while(j > 0 && nums[j] < nums[j-1]){
                // swap
                const temp = nums[j]
                nums[j] = nums[j-1] 
                nums[j-1] = temp
                j--
            }
        }

        return nums
    }
}
