function convertData(data) {
  // => {song, user, viewers, rewards}

  const result = []

  for (let i = 0; i < data.length; i++) {
        const record = data[i] // mau diconvert
        const rewardsToPush = []

        const reward = record.rewards
        
        for (let j = 0; j < reward.length; j++) {
          const rewardRow = reward[j]
          const rewardName = rewardRow[0]
          const noOfRewards = rewardRow[1]

          rewardsToPush.push(rewardName)
          // => rewardsToPush [ 'Rocket', 11, 'Chocolate', 13, 'Ferrari']
          rewardsToPush.push(noOfRewards)
          // => rewardsToPush [ 'Rocket', 11, 'Chocolate', 13, 'Ferrari', 1 ]

          
        }
        result.push(rewardsToPush)
      }
    return result
  
}

console.log(
  convertData([
    {
      song: "Papi Chulo",
      user: "Chikakiku",
      viewers: 720,
      rewards: [
        ["Rocket", 11],
        ["Chocolate", 13],
        ["Ferrari", 1],
      ],
    },
    {
      song: "Saranghae",
      user: "Lisa Stream",
      viewers: 1400,
      rewards: [
        ["Diamond", 9],
        ["Heart", 20],
        ["Ferrari", 7],
        ["Star", 30],
      ],
    },
    {
      song: "Mipan Zuzuzu",
      user: "Mr Jack",
      viewers: 32,
      rewards: [
        ["Diamond", 1],
        ["Star", 5],
      ],
    },
  ])
);