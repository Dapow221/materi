// getPoints
function getPoints(history) {
  let itemPoint = {
    'Moonlight': 120,
    'Goldqueen': 550,
    'Beras Parist': 1200,
    'Minyak Fatma': 2500
  }
  // write your code here
  let hasil = {}
  let result = {}
  let point
  for (let i = 0; i < history.length; i++) {
    if (!result[history[i]]) {
      result[history[i]] = 1
    } else {
      result[history[i]]++
    }
  }
  let poin1 = result["Minyak Fatma"] * 2500
  let poin2 = result["Moonlight"] * 120
  let poin3 = result["Beras Parist"] * 1200
  let poin4 = result["Goldqueen"] * 550
  point = poin1 + poin2 + poin3 + poin4
  hasil.totalPoint = point
  hasil.belanjaanReport = result
  return hasil
}

const history = [
  'Minyak Fatma',
  'Moonlight',
  'Beras Parist',
  'Minyak Fatma',
  'Goldqueen',
  'Beras Parist',
  'Moonlight',
  'Moonlight',
  'Moonlight',
  'Minyak Fatma',
  'Goldqueen',
  'Goldqueen',
  'Minyak Fatma',
  'Beras Parist',
  'Beras Parist',
  'Moonlight',
  'Moonlight',
  'Minyak Fatma',
  'Minyak Fatma'
]

//console.log(getPoints(history))



// getPrizes
function getPrizes(point) {
  let listPrize = [
    [2000, 'Voucher 10k', 'Sticker', 'Penggaris' ],
    [5000, 'Voucher 25k', 'Kinderboy', 'Tissue', 'Piring'],
    [10000, 'Payung', 'Panci']
  ]
  // write your code here
  let ppp = point
  let result = []
  for (let i = 0; i < listPrize.length; i++) {
    for (let j = 1; j < listPrize[i].length; j++) {
      if (ppp > Number(listPrize[i][0])) {
        result.push(listPrize[i][j])
        ppp = ppp - Number(listPrize[i][0])
      } else {
      }
    }
  }
  return result
}
//console.log(getPrizes(22000))
// betamart
function betamart(pembeli) {
  // write your code here
  let result = pembeli
  let poin = getPoints(pembeli.histories)
  let aaaa = getPrizes(poin.totalPoint)
  delete result.histories
  result.belanjaanReport = poin.belanjaanReport
  result.prizes = aaaa
  return result
}

console.log(
  betamart({
    name: 'Ilham',
    histories: [
      'Moonlight',
      'Goldqueen',
      'Beras Parist',
      'Moonlight',
      'Goldqueen',
      'Beras Parist',
      'Minyak Fatma',
      'Minyak Fatma',
      'Minyak Fatma',
      'Moonlight',
      'Goldqueen',
      'Goldqueen',
      'Moonlight',
      'Beras Parist',
      'Beras Parist',
      'Minyak Fatma',
      'Minyak Fatma',
      'Moonlight',
      'Moonlight'
    ]
  })
)
/**
{
  name: 'Ilham',
  belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
  prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
}
*/