function strToArr(str){ // str = '96217' => [9,6,2,1,7]
    const result = []

    for (let i = 0; i < str.length; i++) {
        result.push(+str[i])
    }

    return result
}

function sortingArr(arr){ //[9,6,2,1,7] => [1,2,6,7,9]
    const result = []

    for(let x = 0; x < arr.length; x++){
        result.push(arr[x])
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if(result[i] < result[j]){
                let temp = result[i]
                result[i] = result[j]
                result[j] = temp
            }
        }
    }

    return result
}

function arrToStr(arr){
    let result = ""

    for (let i = 0; i < arr.length; i++) {
        result += arr[i] 
    }

    return result
}


function sortingString(input){
    const hasilStrToArr = strToArr(input)
    const hasilSortingArr = sortingArr(hasilStrToArr)
    const hasilArrToStr = arrToStr(hasilSortingArr)

    return hasilArrToStr
}

console.log(sortingString('96217')); // `12679`
console.log(sortingString('83649101318391')); //`01111333468899`
console.log(sortingString('283719301237749111240')); //`001111122233344777899`

/**
 * 1. input = string =>> array of number
 * 2. array of number =>> di sorting dari kecil ke besar [9,6,2,1,7] => [1,2,6,7,9]
 * 3. ubah array of number menjadi sebuah output string spt di soal
 */
