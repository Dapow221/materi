// const arrObj = [

//     {
//         name : "araanaaa",
//         umur : 21
//     },
//     {
//         name : "bong",
//         umur : 19
//     }
// ]

// for (let i = 0; i < arrObj.length; i++) {
//     const obj = arrObj[i];
//     console.log(obj.name);
    
// }


// const dongeng = [
//     {
//         "name" : "Timun Mas",
//         "story" : "Timun Mas",
//         "charType" : "Protagonist",
//         "gender" : "Female"
//     },
//     {
//         "name" : "Mbok Rondo",
//         "story" : "Timun Mas",
//         "charType" : "Protagonist",
//         "gender" : "Female"
//     },
//     {
//         "name" : "Raksasa",
//         "story" : "Timun Mas",
//         "charType" : "Antagonist",
//         "gender" : "Male"
//     },
//     {
//         "name" : "Kancil",
//         "story" : "Si Kancil",
//         "charType" : "Protagonist",
//         "gender" : "Male"
//     },
//     {
//         "name" : "Buaya",
//         "story" : "Si Kancil",
//         "charType" : "Antagonist",
//         "gender" : "Male"
//     },
//     {
//         "name" : "Pak Tani",
//         "story" : "Si Kancil",
//         "charType" : "Protagonist",
//         "gender" : "Male"
//     },
//     {
//         "name" : "Bawang Merah",
//         "story" : "Bawang Merah Bawang Putih",
//         "charType" : "Antagonist",
//         "gender" : "Female"
//     },
//     {
//         "name" : "Bawang Putih",
//         "story" : "Bawang Merah Bawang Putih",
//         "charType" : "Protagonist",
//         "gender" : "Female"
//     },
//     {
//         "name" : "Ibu Tiri",
//         "story" : "Bawang Merah Bawang Putih",
//         "charType" : "Antagonist",
//         "gender" : "Female"
//     },
//     {
//         "name" : "Kabayan",
//         "story" : "Si Kabayan",
//         "charType" : "Protagonist",
//         "gender" : "Male"
//     },
//     {
//         "name" : "Jaka Tarub",
//         "story" : "Jaka Tarub & 7 Bidadari",
//         "charType" : "Protagonist",
//         "gender" : "Male"
//     },
//     {
//         "name" : "Nawang Wulan",
//         "story" : "Jaka Tarub & 7 Bidadari",
//         "charType" : "Protagonist",
//         "gender" : "Female"
//     },
//     {
//         "name" : "Lutung Kasarung",
//         "story" : "Lutung Kasarung",
//         "charType" : "Protagonist",
//         "gender" : "Male"
//     },
//     {
//         "name" : "Ikan Mas",
//         "story" : "Asal Mula Danau Toba",
//         "charType" : "Protagonist",
//         "gender" : "Female"
//     },
//     {
//         "name" : "Malin Kundang",
//         "story" : "Malin Kundang",
//         "charType" : "Protagonist",
//         "gender" : "Male"
//     },
//     {
//         "name" : "Sangkuriang",
//         "story" : "Sangkuriang",
//         "charType" : "Protagonist",
//         "gender" : "Male"
//     }
// ]

// function getChar(arr) {
//     const output = {}

// for (let i = 0; i < arr.length; i++) {
//     const obj = arr[i];
//     const key = obj.charType
    
//     if (output[key] === undefined) {
//         output[key] = []
//     }
    
//     output[key].push(obj.name)
    
// }
//     return output
// }



// console.log(getChar(dongeng));



function convertData(data) {
  let result = []

  for (let i = 0; i < data.length; i++) {
      const record = data[i] // ini mau di-convert
      const rewardsToPush = []

      const rewards = record.rewards

      for (let j = 0; j < rewards.length; j++) {
          const rewardRow = rewards[j] // ['Ferrari', 1]
          const rewardName = rewardRow[0] // 'Ferrari'
          const noOfRewards = rewardRow[1] // 1

          rewardsToPush.push(rewardName)
          rewardsToPush.push(noOfRewards)
      }

      result.push(rewardsToPush)
  }

  return result
}
// Silver adalah user yang memiliki total point (1250 - 2499) dan view time (250 -499)

function calculateTotalPoint(data) {
  let listReward = [
      { name: 'Rocket', point: 100 }, // 0
      { name: 'Chocolate', point: 200 }, // 1
      { name: 'Ferrari', point: 500 }, // 2
      { name: 'Heart', point: 50 }, // 3
      { name: 'Diamond', point: 150 }, // 4
      { name: 'Star', point: 25 }, // 5
  ]

  const result = []

  /*
  data => [[rewardName, noOfRewards, rewardName, noOfRewards, ...], [.,.]]
  */
  for (let i = 0; i < data.length; i++) {
      const row = data[i] // hitung total point row ini
      // row => ['Rocket', 10, 'Chocolate', 5]

      let totalPoint = 0

      // ex: 0 2 4:STOP
      for (let j = 0; j < row.length; j += 2) {
          const rewardName = row[j] // 'Rocket'
          const noOfRewards = row[j + 1] // 10

          for (let k = 0; k < listReward.length; k++) {
              const rewardItem = listReward[k]

              // di listReward ada yang namenya sama
              // dengan rewardName, saya ambil pointnya
              // untuk dikalikan dengan noOfRewards
              if (rewardName === rewardItem.name) {
                  // noOfRewards * rewardItem.point
                  totalPoint += noOfRewards * rewardItem.point
                  break // kalo udah ketemu, gausah lanjut nyari lagi
              }
          }
      }

      // Push totalPoint
      result.push(totalPoint)
  }

  return result
}

function viewTime(data) {
  const result = []
  for (let i = 0; i < data.length; i++) {
      const row = data[i]
      const viewers = row.viewers
      const videoDuration = 45
      const secondsWatched = viewers * videoDuration
      const minutesWatched = secondsWatched / 60

      result.push(minutesWatched)
  }

  return result
}

function tiktokRank(data) {
  if (!data || !Array.isArray(data)) {
      return 'Insert data'
  }

  if (data.length === 0) {
      return data
  }

  const result = {}

  // Hitung total point
  const rewardsData = convertData(data)
  const totalPointData = calculateTotalPoint(rewardsData)
  // Hitung view time
  const viewTimeData = viewTime(data)

  for (let i = 0; i < data.length; i++) {
      const record = data[i]
      const user = record.user
      const userTotalPoint = totalPointData[i]
      const userViewTime = viewTimeData[i]
      if (userTotalPoint > 5000 && userViewTime > 1000) {
          if (!result.Platinum) {
              result.Platinum = []
          }

          result.Platinum.push(user)
      } else if (
          userTotalPoint >= 2500 &&
          userTotalPoint <= 5000 &&
          userViewTime >= 500 &&
          userViewTime <= 1000
      ) {
          if (!result.Gold) {
              result.Gold = []
          }

          result.Gold.push(user)
          // Silver adalah user yang memiliki total point (1250 - 2499) dan view time (250 -499)
      } else if (
          userTotalPoint >= 1250 && userTotalPoint <= 2499 && userViewTime >= 250 && userViewTime <= 499) {
          
            if (!result.Silver) {
            result.Silver = []
            }

            result.Silver.push(user)

      } else {
          if (!result.Bronze) {
              result.Bronze = []
          }

          result.Bronze.push(user)
      }
  }

  return result
}

// TEST CASE
console.log(tiktokRank([])) // [];
console.log(tiktokRank()) // Insert data

let data1 = [
  {
      song: 'Papi Chulo',
      user: 'Chikakiku',
      viewers: 720,
      rewards: [
          ['Rocket', 11],
          ['Chocolate', 13],
          ['Ferrari', 1],
      ],
  },
  {
      song: 'Saranghae',
      user: 'Lisa Stream',
      viewers: 1400,
      rewards: [
          ['Diamond', 9],
          ['Heart', 20],
          ['Ferrari', 7],
          ['Star', 30],
      ],
  },
  {
      song: 'Mipan Zuzuzu',
      user: 'Mr Jack',
      viewers: 32,
      rewards: [
          ['Diamond', 1],
          ['Star', 5],
      ],
  },
  {
      song: 'Savage Megan',
      user: '12yes',
      viewers: 980,
      rewards: [
          ['Star', 6],
          ['Diamond', 3],
          ['Rocket', 5],
          ['Heart', 2],
          ['Ferrari', 1],
          ['Chocolate', 4],
      ],
  },
  {
      song: 'Lottery',
      user: 'dj_cuap',
      viewers: 1240,
      rewards: [
          ['Star', 30],
          ['Heart', 10],
          ['Chocolate', 2],
          ['Ferrari', 4],
      ],
  },
  {
      song: 'Roses',
      user: 'Dior777',
      viewers: 560,
      rewards: [
          ['Rocket', 3],
          ['Star', 10],
          ['Diamond', 5],
          ['Heart', 4],
      ],
  },
]

console.log(tiktokRank(data1))
/*
{
Gold: [ 'Chikakiku', '12yes', 'dj_cuap' ],
Platinum: [ 'Lisa Stream' ],
Bronze: [ 'Mr Jack', 'Dior777' ]
}
*/

let data2 = [
  {
      song: 'Papi Chulo',
      user: 'Chikakiku',
      viewers: 720,
      rewards: [
          ['Rocket', 11],
          ['Chocolate', 13],
          ['Diamond', 1],
          ['Ferrari', 1],
      ],
  },
  {
      song: 'Saranghae',
      user: 'Lisa Stream',
      viewers: 1400,
      rewards: [
          ['Diamond', 9],
          ['Heart', 20],
          ['Ferrari', 7],
          ['Star', 30],
      ],
  },
  {
      song: 'Mipan Zuzuzu',
      user: 'Mr Jack',
      viewers: 740,
      rewards: [
          ['Diamond', 1],
          ['Star', 5],
          ['Ferrari', 4],
          ['Heart', 15],
      ],
  },
  {
      song: 'Savage Megan',
      user: '12yes',
      viewers: 1380,
      rewards: [
          ['Star', 6],
          ['Diamond', 15],
          ['Rocket', 5],
          ['Heart', 2],
          ['Ferrari', 4],
          ['Chocolate', 4],
      ],
  },
  {
      song: 'Lottery',
      user: 'dj_cuap',
      viewers: 1240,
      rewards: [
          ['Star', 30],
          ['Heart', 10],
          ['Chocolate', 2],
          ['Ferrari', 4],
      ],
  },
  {
      song: 'Roses',
      user: 'Dior777',
      viewers: 860,
      rewards: [
          ['Rocket', 3],
          ['Star', 10],
          ['Diamond', 5],
          ['Heart', 4],
          ['Ferrari', 2],
      ],
  },
]

console.log(tiktokRank(data2))
/*
{
Gold: [ 'Chikakiku', 'Mr Jack', 'dj_cuap', 'Dior777' ],
Platinum: [ 'Lisa Stream', '12yes' ]
}
*/

let data3 = [
  {
      song: 'Papi Chulo',
      user: 'Chikakiku',
      viewers: 100,
      rewards: [
          ['Rocket', 11],
          ['Chocolate', 13],
          ['Ferrari', 1],
      ],
  },
  {
      song: 'Saranghae',
      user: 'Lisa Stream',
      viewers: 140,
      rewards: [
          ['Diamond', 9],
          ['Heart', 20],
          ['Ferrari', 7],
          ['Star', 30],
      ],
  },
  {
      song: 'Mipan Zuzuzu',
      user: 'Mr Jack',
      viewers: 120,
      rewards: [
          ['Diamond', 1],
          ['Star', 5],
      ],
  },
  {
      song: 'Savage Megan',
      user: '12yes',
      viewers: 80,
      rewards: [
          ['Star', 6],
          ['Diamond', 3],
          ['Rocket', 5],
          ['Heart', 2],
          ['Ferrari', 1],
          ['Chocolate', 4],
      ],
  },
  {
      song: 'Lottery',
      user: 'dj_cuap',
      viewers: 160,
      rewards: [
          ['Star', 30],
          ['Heart', 10],
          ['Chocolate', 2],
          ['Ferrari', 4],
      ],
  },
  {
      song: 'Roses',
      user: 'Dior777',
      viewers: 60,
      rewards: [
          ['Rocket', 3],
          ['Star', 10],
          ['Diamond', 5],
          ['Heart', 4],
      ],
  },
]

console.log(tiktokRank(data3))
/*
{
Bronze: [
  'Chikakiku',
  'Lisa Stream',
  'Mr Jack',
  '12yes',
  'dj_cuap',
  'Dior777'
]
}
*/

module.exports = {
  convertData,
  calculateTotalPoint,
  viewTime,
  tiktokRank,
}