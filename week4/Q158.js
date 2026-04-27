// Sort the People

function sortPeople(names , height){
    const map = {}
    for(let i = 0 ; i < names.length ; i++){
        map[height[i]] = names[i]
    }
    const result = Object.values(map)

    return result.reverse()
}



console.log(sortPeople(["Mary","John","Emma"], [180,165,170]))