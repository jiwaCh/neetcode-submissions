class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        // selection sort, bad time, but just learning. 
        // space is 0, time is n^2
        for(let i = 0; i < nums.length; i++){
            let smallestIndex = i
            for(let j = i; j < nums.length; j++){
                if(nums[j] < nums[smallestIndex]){
                    smallestIndex =  j
                }
            }
            const temp = nums[i]
            nums[i] = nums[smallestIndex]
            nums[smallestIndex] = temp
        }

        return nums
    }
}
