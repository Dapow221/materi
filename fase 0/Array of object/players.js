const players = [
    {
      "id": 1,
      "fullName": "Aaron Ramsdale",
      "position": "Goalkeeper",
      "nationality": "England",
      "age": 24,
      "height": 188,
      "weight": 87,
      "team": "Arsenal"
    },
    {
      "id": 2,
      "fullName": "Fabio Vieira",
      "position": "Midfielder",
      "nationality": "Portugal",
      "age": 22,
      "height": 170,
      "weight": 58,
      "team": "Arsenal"
    },
    {
      "id": 3,
      "fullName": "Thiago Silva",
      "position": "Defender",
      "nationality": "Brazil",
      "age": 38,
      "height": 183,
      "weight": 78,
      "team": "Chealsea"
    },
    {
      "id": 4,
      "fullName": "Gerard Piqué",
      "position": "Defender",
      "nationality": "Spain",
      "age": 27,
      "height": 178,
      "weight": 73,
      "team": "Barcelona"
    },
    {
      "id": 5,
      "fullName": "Sergio Busquets",
      "position": "Midfielder",
      "nationality": "Spain",
      "age": 34,
      "height": 188,
      "weight": 76,
      "team": "Barcelona"
    },
    {
      "id": 6,
      "fullName": "Mohamed Salah",
      "position": "Fullback",
      "nationality": "Egypt",
      "age": 30,
      "height": 175,
      "weight": 71,
      "team": "Liverpool"
    },
    {
      "id": 7,
      "fullName": "Ibrahima Konaté",
      "position": "Defender",
      "nationality": "France",
      "age": 23,
      "height": 193,
      "weight": 93,
      "team": "Liverpool"
    },
    {
      "id": 8,
      "fullName": "David de Gea",
      "position": "Goalkeeper",
      "nationality": "Spain",
      "age": 32,
      "height": 193,
      "weight": 76,
      "team": "Manchester United"
    },
    {
      "id": 9,
      "fullName": "Harry Maguire",
      "position": "Defender",
      "nationality": "England",
      "age": 29,
      "height": 193,
      "weight": 88,
      "team": "Manchester United"
    },
    {
      "id": 10,
      "fullName": "Sergio Gómez",
      "position": "Midfielder",
      "nationality": "Spain",
      "age": 22,
      "height": 170,
      "weight": 68,
      "team": "Manchester City"
    },
    {
      "id": 11,
      "fullName": "Julián Álvarez",
      "position": "Fullback",
      "nationality": "Argentina",
      "age": 22,
      "height": 170,
      "weight": 71,
      "team": "Manchester City"
    }
  ]


function getTeam(team) {
const output = {}


    for (let i = 0; i < team.length; i++) {
        const obj = team[i];
        
        if (!output[obj.team]) {
            output[obj.team] = {
                players : [],
                totalPlayer : 0,
                avgAge : 0,
                avgHeight : 0,
                avgWeight : 0,

            }
        }
        output[obj.team].avgAge += obj.age
        output[obj.team].avgHeight += obj.height
        output[obj.team].avgWeight += obj.weight

        output[obj.team].players.push(obj.fullName)
        output[obj.team].totalPlayer = output[obj.team].players.length
        // output[obj.team].avgAge = (output[obj.team].avgAge + obj.age) / output[obj.team].totalPlayer
        // output[obj.team].avgHeight = (output[obj.team].avgHeight + obj.height) / output[obj.team].height.totalPlayer
        // output[obj.team].avgWeight = (output[obj.team].avgWeight + obj.weight) / output[obj.team].weight.totalPlayer
    }

    for (const key in output) {
        const avgAge = output[key].avgAge / output[key].totalPlayer
        const avgHeight = output[key].avgHeight / output[key].totalPlayer
        const avgWeight = output[key].avgWeight / output[key].totalPlayer

        output[key].avgAge = avgAge
        output[key].avgHeight = avgHeight
        output[key].avgWeight = avgWeight
    }

return output

}

console.log(getTeam(players));


    



