// function tambah(number1, number2){
//     return number1 + number2
// }

// function kurang(number1, number2){
//     return number1 - number2
// }

// function kali(number1, number2){
//     return number1 * number2
// }

// function bagi(number1, number2){
//     return number1 / number2
// }

// function sisaBagi(number1, number2){
//     return number1 % number2
// }


// function calculator(operandKiri, operandKanan, operator){
//     if(isNaN(operandKiri) || isNaN(operandKanan)){
//         return `Parameter 1 & 2 harus angka`
//     }

//     if(operator === "+"){
//         return tambah(operandKiri, operandKanan)
//     }else if(operator === "-"){
//         return kurang(operandKiri, operandKanan)
//     }else if(operator === "*"){
//         return kali(operandKiri, operandKanan)
//     }else if(operator === "/"){
//         return bagi(operandKiri, operandKanan)
//     }else if(operator === "%"){
//         return sisaBagi(operandKiri, operandKanan)
//     }
// }

// console.log(calculator(9, 4, "+"))
// console.log(calculator(9, 4, "-"))
// console.log(calculator(9, 4, "*"))
// console.log(calculator(9, 4, "/"))
// console.log(calculator(9, 4, "%"))
// console.log(calculator("a", "b", "%"))




function cekJumlahBahan(bahanbaku){
    if(bahanbaku.length > 2){
        return `Ada menu`
    }else{
        return `Tidak ada menu`
    }
}

function cekMasakan(hasilCekBahan, bahanbaku){
    let menu = ""
    if(hasilCekBahan === `Ada menu`){
        for(let i = 0; i < bahanbaku.length; i++){
            if(bahanbaku[i] === "tomat"){
                menu = `Sup`
                break
            }else{
                menu = `Tumis`
            }
        }
    }

    return menu
}

function restoran(bahanbaku){
    const jumlahBahan = cekJumlahBahan(bahanbaku)
    const hasilCekMasakan = cekMasakan(jumlahBahan, bahanbaku)

    if(!hasilCekMasakan){
        return `Tidak ada masakan untuk hari ini`
    }else{
        return `Menu hari ini adalah ${hasilCekMasakan}`
    }
}

console.log(restoran(["kangkung", "tomat", "ayam"]))
