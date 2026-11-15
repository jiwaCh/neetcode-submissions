class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ans = ""
        for(const str of strs){
            ans += "{"+str.length+"}"+str
        }
        return ans
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const ans = []
        for(let i = 0; i < str.length; i++){
            if(str[i] === "{"){
                for(let r = i; r < str.length; r++){
                    if(str[r] === "}"){
                        const number = Number(str.substring(i+1,r))
                        ans.push(str.substring(r+1, r+number+1))
                        i = r + number // since it will plus one when loop is done
                        break;
                    }
                }
            }
        }

        return ans

    }
}
