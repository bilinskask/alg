function evalNumber(num){
    if(typeof num !== "number"){
        return NaN
    }
    else if(num % 2 !== 0){
        return "EVEN"
    }
    else{
        return "ODD"
    }
}

function someWeirdUse(str){
    const charArr = [...str]
    let dashSpacedVal = ""
    for(i=1; i < charArr.length; i++){
        for(j=0; j < i; j++){
            dashSpacedVal += charArr[i]
        }
        if(charArr.length - i !== 1){
            dashSpacedVal += "-"
        }      
    }
    return dashSpacedVal
}

function filterByType(arr, typeToFilter){
    return arr.reduce((result, value) =>{
        if(typeof value == typeToFilter){
            result.push(value)
        }
        return result
    },[])
}

function stringToNumber(stringArr){
    // return stringArr.reduce((result, value)=>{
    //     result.push(Number(value))
    //     return result
    // },[])
    return stringArr.map(value =>{
        return Number(value)
    })
}

function pluck(objArr, identifier){
    return objArr.map(value =>{
        return value[identifier]
    })
}

function blacklist(randomArr){
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return randomArr.reduce((list, entry) =>{
        if(!geese.includes(entry)){
            list.push(entry)
        }
        return list
    },[])
}