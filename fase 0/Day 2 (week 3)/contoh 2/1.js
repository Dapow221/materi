// getAnimals
function getAnimals(arr) {
  // Write your code here
  let result = []
  let karnivora = []
  let herbivora = []
  let omnivora = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = (arr[i].length - 1) ; j < arr[i].length; j++) {
      if (arr[i][j] === "K") {
        karnivora.push(arr[i])
      } else if (arr[i][j] === "H"){
        herbivora.push(arr[i])
      } else if (arr[i][j] === "O"){
        omnivora.push(arr[i])
      }
    }
  }
  let hasilk = tpj(karnivora)
  result.push(hasilk[0])
  let hasilh = tpj(herbivora)
  result.push(hasilh[0])
  let hasilo = tpj(omnivora)
  result.push(hasilo[0])
  return result
}
function tpj(abs) {
  let aray = abs
  let flag = false
  let i = 0
  do {
    for (let k = 0; k < (aray.length - 1); k++) {
      flag = true
      if (aray[k].length < aray[k+1].length){
        let temp = aray[k]
        aray[k] = aray[k+1]
        aray[k+1] = temp
        flag = false
      }
    }
    i++
  } while (i < 50)
  //console.log(aray)
  let result = []
  let aa = aray.join()
  let smen = ''
  for (let g = 0; g < aa.length; g++) {
    if (aa[g] === ":"){
      result.push(smen)
      smen = ''
      g++
    } else if (aa[g] === ','){
      continue
    } else {
      smen = smen + aa[g]
    }
  }
  //console.log(result)
  return result
}

//Test Case 

console.log(getAnimals(['Singa:K','Kuda:H','Monyet:O']))
// [ 'Singa','Kuda','Monyet' ]

console.log(getAnimals(['Macan:K', 'Ayam:O', 'Gajah:H', 'Monyet:O', 'Kerbau:H', 'Musang:O', 'Burung:H', 'Hiu:K']))
// [ 'Macan', 'Kerbau', 'Monyet' ]

console.log(getAnimals(['Tikus:O', 'Merpati:H', 'Beruang:O', 'Elang:K', 'Perkutut:H', 'Harimau:K']))
// [ 'Harimau', 'Perkutut', 'Beruang' ]