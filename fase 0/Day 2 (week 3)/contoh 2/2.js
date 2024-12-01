// filterMovie
function filterMovie(genres) {
  let movies = [
    ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
    ["Action", "Mad Max", "The Batman", "Josh Wick"],
    ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
    ["Comedy", "Safety Last", "The Trip"]
  ];
  // write your code here
  let result = []
  for (let i = 0; i < genres.length; i++) {
    if (genres[i] === "Drama") {
      result.push(movies[0])
    } else if (genres[i] === "Action") {
      result.push(movies[1])
    } else if (genres[i] === "Fantasy") {
      result.push(movies[2])
    } else if (genres[i] === "Comedy") {
      result.push(movies[3])
    } else {
      return result
    }
  }
  return result
}

// usersCanWatch
function usersCanWatch(users) {
  // write your code here
  if (!users) {
    return `Invalid Data!`
  }
  const a = users.menu
  let b = []
  let temp = ''
  for (let i = 0; i < a.length; i++) {
    if (a[i] === ';') {
      b.push(temp)
      temp = ''
    } else {
      temp = temp + a[i]
    }
  }
  b.push(temp)
  let movie = filterMovie(b)
  
  if (movie.length === 0) {
    return `Movie not found`
  } else {
    return movie
  }
}

console.log(usersCanWatch({
    name: "Bari",
    cinema: "XIV",
    menu: "Action;Drama;Comedy"
  })
);
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

console.log(usersCanWatch({
    name: "Rizka",
    cinema: "Cinepolos",
    menu: "Scifi;Musical"
  })
);
// "Movie not found"

console.log(usersCanWatch());
// "Invalid Data!"