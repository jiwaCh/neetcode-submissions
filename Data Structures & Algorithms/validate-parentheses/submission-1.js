class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            "{" : "}",
            "(" : ")",
            "[" : "]" 
        }
        const stack = []
        for(let i = 0; i < s.length; i++){
            const current = s[i]
            if(Object.keys(pairs).includes(current)){
                stack.push(current)
            }else{
                const openingBracket = stack.pop()
                if(pairs[openingBracket] !== current){
                    return false
                }
            }
        }

        return Boolean(stack.length === 0)
    }
}
