class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map()
        for(const num of nums){
            if(map.has(num)){
                map.set(num, map.get(num)+1)
            }else{
                map.set(num, 1)
            }
        }
        let highestVal = 0
        let occurance = 0
        for(const [key, value] of map){
            if(occurance < value ){
                highestVal = key
                occurance = value
            }
        }

        return highestVal
    }
}
