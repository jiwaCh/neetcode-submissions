class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(_order, s) {
            const freq = new Map()
    const order = new Set(_order)

    for(const char of s){
        if(order.has(char)){
            freq.set(char, (freq.get(char) ?? 0)+1)
        }
    }

    let ans = ""

    for(const key of order){
        if(freq.has(key)){
            ans += key.repeat(freq.get(key))
        }
    }

    for(const char of s){
        if(!order.has(char)){
            ans += char
        }
    }

    return ans

    }
}
