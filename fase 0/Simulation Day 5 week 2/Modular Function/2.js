function splitStr(str, splitter){
    const result = []
    let temp = "" 

    for (let i = 0; i < str.length; i++) {
        // cek ;
        // cek akhir dari str
        // selain itu

        // ! CARA 1
        // if(str[i] === ";"){
        //     result.push(temp)
        //     temp = ''
        // }else if(str[i + 1] === undefined){
        //     temp += str[i]
        //     result.push(temp)
        // }else{
        //     temp += str[i]
        // }

        // ! CARA 2 kondisi harus pake =
        // if(str[i] !== ";" && str[i] !== undefined ){
        //     temp += str[i]
        // }else{
        //     result.push(temp)
        //     temp = ''
        // }

        // ! CARA 3
        if(str[i] !== ";"){
            temp += str[i]
        }else{
            result.push(temp)
            temp = ''
        }
        
    }
    result.push(temp) // INI LANJUTAN CARA 3

    return result
}

console.log(splitStr("ani-28;budi-18;adit-26;sari-23;rini-30"));

function findMaxAndAvg(string){

}

console.log(findMaxAndAvg("ani-28;budi-18;adit-26;sari-23;rini-30")); //max:30, avg:25

/**
 * 1. Split string menjadi arr berdasarkan pemisahnya (; / -)
 * 2. Hitung umur max dan avg
 */

/**
 * "ani-28;budi-18;adit-26;sari-23;rini-30"
 * ; => temp masukkan ke ["ani-28", "budi-18", "adit-26","sari-23", "rini-30"], lalu dikosongkan
 * [i+1] === undefined => temp += str[i] , temp di push []
 * temp += rini-30
 */