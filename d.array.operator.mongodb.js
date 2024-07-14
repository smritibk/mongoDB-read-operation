use("kec-crude");

//* array operator
//? $all
//? elemMatch
//? $size

//? find movies whose genres includes both "Drama" and "Comedy"

// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Comedy" }] });

//? same field ma "$and" use bhako xa ra tyo field array ho bhane
//? we can use "$all"

// db.movies.find({ genres: { $all: ["Drama", "Comedy"] } });
// these both codes have differences , the upper code searches
// db.movies.find({ genres: ["Drama", "Comedy"] });

//* $size
//? we cannot provide range to size
//? find those movies whose genre size is 3
// db.movies.find({ genres: { $size: 1 } });

// db.scores.insertMany([
//   {
//     name: "Shubham",
//     scores: [82, 85, 88],
//     points: [
//       {
//         sub: "Social",
//         point: 82,
//       },
//       {
//         sub: "Science",
//         point: 65,
//       },
//     ],
//   },
//   {
//     name: "Suyasha",
//     scores: [75, 88, 89],
//     points: [
//       {
//         sub: "Social",
//         point: 75,
//       },
//       {
//         sub: "Science",
//         point: 84,
//       },
//     ],
//   },

//   {
//     name: "Smarika",
//     scores: [42, 65, 88],
//     points: [
//       {
//         sub: "Social",
//         point: 67,
//       },
//       {
//         sub: "Science",
//         point: 89,
//       },
//     ],
//   },
// ]);

// db.scores.find({
//   points: { $elemMatch: { sub: "Social", point: { $gt: 80 } } },
// });

//? find students whose score is greater than 80 and less than 85
// db.scores.find({ scores: { $elemMatch: { $gt: 80, $lt: 85 } } });

// db.employee.insertMany([
//     { name: "Utsarga", income: 800, expense: 600 },
//     { name: "Smriti", income: 900, expense: 1100 },
//     { name: "Samrat", income: 1100, expense: 700 },
//   ]);

//? find employees whose expenses is greater than their income
// db.employee.find({ $expr: { $gt: ["$expense", "$income"] } });

//? find employees whose income is less than 850
// db.employee.find({ income: { $lt: 850 } });


