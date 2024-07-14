use("kec-crude");

//? logical operator
//? $and, $or, $not, $nor

//? find movies whose genre is action and rating is greater than 7
// db.movies.find(
//   {
//     $and: [{ genres: "Action" }, { "rating.average": { $gt: 7 } }],
//   },
//   { name: 1, rating: 1, genres: 1 }
// );

//? equivalent code
// db.movies.find({ genres: "Action", "rating.average": { $gt: 7 } });

//*$or
//? find movies whose genre is "Crime" or network country is "United States"

// db.movies.find(
//   {
//     $or: [
//       { genres: "Horror" },
//       { "network.country.name": { $ne: "United States" } },
//     ],
//   },
//   { name: 1, network: 1, genres: 1 }
// );

//* $nor => all applied condition should not match
// //? find movies whose rating is neither greater than 7 nor genres is "Drama"
// db.movies.find(
//   {
//     $nor: [{ genres: "Drama" }, { "rating.average": { $gt: 7 } }],
//   },
//   { name: 1, genres: 1, "rating.average": 1 }

// );


