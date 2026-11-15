class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map()
        for(const num of nums){
            map.set(num, (map.get(num)??0) +1 )
        }

        let count = 0;
        let ans = 0;

        for(const [key, value] of map){
            if(value > count){
                ans = key
                count = value
            }
        }

        return ans

    }
}
