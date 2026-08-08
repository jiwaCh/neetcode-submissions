class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        const map = new Map()
        for(const s in s1){
            map.set(s1[s], (map.get(s1[s]) ?? 0) + 1)
        }

        for(let l = 0, r = 0 ; r < s2.length; r++ ){
            if(map.get(s2[r]) > 0){
                map.set(s2[r],map.get(s2[r])-1)
            }
            else{
                if(map.has(s2[l])){
                    map.set(s2[l],map.get(s2[l])+1)
                    r--
                }
                l++
            } 

            const empty = [...map.values()].every(item => item <= 0)
            if(empty) return true

        }

        return false


    }
}
