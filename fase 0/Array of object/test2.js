
function calculateTotalPoint(data) {

let listReward = [
    { name: "Rocket", point: 100 }, // 0
    { name: "Chocolate", point: 200 }, // 1
    { name: "Ferrari", point: 500 },
    { name: "Heart", point: 50 },
    { name: "Diamond", point: 150 },
    { name: "Star", point: 25 },
  ];

// ["Rocket", 11, "Chocolate", 13, "Ferrari", 1] 6 element array harus diloop 3x tidak efisien
// 0               2                4
// noOfRewards = element[i + 1]

// ["Diamond", 9, "Heart", 20, "Ferrari", 7, "Star", 30]
// 0               2            4             6
// noOfRewards = element[i + 1]

const result = []

for (let i = 0; i < data.length; i++) {
    const row = data[i]
    let totalPoint = 0
    
    for (let j = 0; j < row.length; j += 2) {
      const rewardName= row[j]
      const noOfRewards = row[j + 1]
      

      for (let k = 0; k < listReward.length; k++) {
        const rewardItem = listReward[k]

        if (rewardName === rewardItem.name) {
            // noOfRewards * rewardItem.point
            totalPoint += noOfRewards * rewardItem.point
            break
          
        }
        
      }
      
      
    
    }
  result.push(totalPoint)
}
return result
}

console.log(
    calculateTotalPoint([
      ["Rocket", 11, "Chocolate", 13, "Ferrari", 1],
      ["Diamond", 9, "Heart", 20, "Ferrari", 7, "Star", 30],
      ["Diamond", 1, "Star", 5],
    ])
  );
