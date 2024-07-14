use("kec-crude");

//? comparison operator
//? $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin

//* $eq
//? find movie whose name is "Glee"
//? name==="Glee"
// db.movies.find({ name: { $eq: "Glee" } }, { name: 1, _id: 0, genres: 1 });

//?equivalent code
// db.movies.find({ name: "Glee" }, { name: 1 });

//* $gt
//? find the movie whose runtime is greater than 70min
// db.movies.find({ runtime: { $gt: 70 } }, { name: 1, runtime: 1 });

//? find the movies whose rating is grater than 9
// db.movies.find(
//   { "rating.average": { $gte: 9 } },
//   { name: 1, "rating.average": 1 }
// );
// db.movies.find(
//   { "rating.average": { $gte: 9 } },
//   { name: 1, averageRating: "$rating.average" }
// );

//* $ne
//?
// db.movies.find({ id: { $ne: 1 } });
db.movies.find({ id: { $not: { $eq: 1 } } });
