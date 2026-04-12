// Check distances Between same letters

 function checkDistances(s, distance) {

    let firstIndex = new Array(26).fill(-1)

    for(let i = 0; i < s.length; i++){
        let ch = s[i]
        let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0)

        if(firstIndex[idx] === -1){
            firstIndex[idx] = i
        }else{
            let dist = i - firstIndex[idx] - 1

            if(dist !== distance[idx]){
                return false
            }
        }
    }

    return true
};
console.log(checkDistances("abaccb", [1, 3, 0, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]))