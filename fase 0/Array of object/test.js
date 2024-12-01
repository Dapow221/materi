
// function viewTime(data) {
//   let viewTimes = [];

//     for (let i = 0; i < data.length; i++) {
//         let userData = data[i];
//         let viewTime = (userData.viewers * 45) / 60; // konversi ke menit
//         viewTimes.push(viewTime);
//     }
//     return viewTimes;
// }

// console.log(
//   viewTime([
//     {
//       song: "Papi Chulo",
//       user: "Chikakiku",
//       viewers: 720,
//       rewards: [
//         ["Rocket", 11],
//         ["Chocolate", 13],
//         ["Ferrari", 1],
//       ],
//     },
//     {
//       song: "Saranghae",
//       user: "Lisa Stream",
//       viewers: 1400,
//       rewards: [
//         ["Diamond", 9],
//         ["Heart", 20],
//         ["Ferrari", 7],
//         ["Star", 30],
//       ],
//     },
//     {
//       song: "Mipan Zuzuzu",
//       user: "Mr Jack",
//       viewers: 32,
//       rewards: [
//         ["Diamond", 1],
//         ["Star", 5],
//       ],
//     },
//   ])
// );



function tiktokRank(data) {

  
  
}




// TEST CASE
console.log(tiktokRank([])); // [];
console.log(tiktokRank()); // Insert data

let data = [
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
  {
    song: "Savage Megan",
    user: "12yes",
    viewers: 980,
    rewards: [
      ["Star", 6],
      ["Diamond", 3],
      ["Rocket", 5],
      ["Heart", 2],
      ["Ferrari", 1],
      ["Chocolate", 4],
    ],
  },
  {
    song: "Lottery",
    user: "dj_cuap",
    viewers: 1240,
    rewards: [
      ["Star", 30],
      ["Heart", 10],
      ["Chocolate", 2],
      ["Ferrari", 4],
    ],
  },
  {
    song: "Roses",
    user: "Dior777",
    viewers: 560,
    rewards: [
      ["Rocket", 3],
      ["Star", 10],
      ["Diamond", 5],
      ["Heart", 4],
    ],
  },
];

console.log(tiktokRank(data));



