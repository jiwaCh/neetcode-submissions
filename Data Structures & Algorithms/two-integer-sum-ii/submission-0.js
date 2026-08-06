class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        for(let l = 0; l < numbers.length; l++){
            const getValue = target - numbers[l]
            for(let r = l+1; r < numbers.length; r++){
                if(getValue === numbers[r]){
                    return [l+1, r+1]
                }
            }
        }
    }
}
