class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            if(map.has(num)){
                map.get(num).push(i)
            }else{
                map.set(num, [i])
            }
        }

        console.log(map)

        const freq = Array(nums.length).fill([])
        for(const [key, value] of map){
            const _mapFreq = value.length
            console.log(_mapFreq)
            freq[_mapFreq].push(key)
        }
        console.log(freq)

        const ans = []
        for(let i = freq.length; i > 0; i--){
            const curr = freq[i]
            if(!curr || curr.length == 0) continue;
            for(let c = 0; c < curr.length; c++){
               ans.push(c) 
               k = k - 1 
               if(k==0){
                return ans
               }
            }
        }

    }
}
