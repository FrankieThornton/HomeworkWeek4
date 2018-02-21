console.log('movies-and-jurassic-park.js is connected! woohoo!');

// Part 1

var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
};



// Do the tasks down here!


var guestOfHonor = 'Dr. Alan Grant';
// var cleverGirl = documentQuerySelector('snakewaterMontana').innerHTML = specimen;


// Part 2

/* var nicaragua = {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ],
};*/

// Do the tasks down here!

var nicaraguanSpecimens = ['Tyrannosaurus Rex', 'Stegosaurous', 'Triceratops', 'Velociraptor'];

var favoriteSpecimen = (nicaraguanSpecimens[3]);

// var revisedAnnualBudget = documentQuerySelector('annual_budget' + 250000);

/*var getRevisedAnnualBudget = {
  const newAnnualBudget = (annual_budget + 250000);
  console.log(newAnnualBudget);
};
*/

// Part 3

var hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ],
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ],
  },
  nicaragua: {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ],
}
};

// Do the tasks down here!

var hammondsMineDepth = hammondsMines.mexico.depth;

var annualBudgetBA = hammondsMines.buenos_aires.annual_budget;
console.log(annualBudgetBA);

console.log(hammondsMines.buenos_aires.specimens);
 
var buenos_airesAnnualBudget = hammondsMines.buenos_aires.annual_budget;
var mexicoAnnualBudget = hammondsMines.mexico.annual_budget;
var nicaraguaAnnualBudget = hammondsMines.nicaragua.annual_budget;

var totalAnnualCost = (buenos_airesAnnualBudget) + (mexicoAnnualBudget) + (nicaraguaAnnualBudget);

console.log(hammondsMines.mexico.specimens[1]);

var shawshank = {
	title: 'Shawshank Redemption',
	director: 'Frank Darabont',
	actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
	releaseYear: 1994,
	duration: 202, 
}

console.log(shawshank.title);
console.log(shawshank.director);
console.log(shawshank.releaseYear);
console.log(shawshank.duration + 25);
