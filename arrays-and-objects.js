/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab 4. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
};

// Extracts the latitude value, and logs it to the console.
console.log(iss_location.iss_position.latitude)
// Extracts the longitude value, and logs it to the console.
console.log(iss_location.iss_position.longitude)




/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
};

// adds a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787

// calculates the equivalent value for 100 euros in Australian Dollars (AUD)
let euro = 100
let euroConversion = euro * rates.AUD

// identifies the currency symbol that has the highest exchange rate compared to Euros.
let topDolla = 0
for(let rate in rates){
    if(topDolla < rates[rate]){
        topDolla = rates[rate]
    }
}



/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
];

//prints Gary Oldman's cat's name
console.log(cats_and_owners[1].cat)
// adds Taylor Swift's cat to the array.
cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"})
//loop to print each cat owner, and their cat's name, one per line. Uses the forEach style.
cats_and_owners.forEach(function(catOwnerPair){
    console.log(catOwnerPair.name, "-", catOwnerPair.cat)
})





/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */



let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
};

// prints the full name of the Literature Nobel laureate.
let litPrizeFirst = ""
let litPrizeLast = ""

for(let x = 0; x < nobel_prize_winners_2017.prizes.length; x++){ //uses a for loop because forEach can't break
  if(nobel_prize_winners_2017.prizes[x].category === "literature"){
    litPrizeFirst = nobel_prize_winners_2017.prizes[x].laureates[0].firstname
    litPrizeLast = nobel_prize_winners_2017.prizes[x].laureates[0].surname
    break;
  }
}
console.log("\nThe Nobel Prize for Literature went to:", litPrizeFirst, litPrizeLast)



// prints the ids of each of the Physics Nobel laureates. Code still works without modification if a laureate was added, or removed.
let physics = nobel_prize_winners_2017.prizes[0].laureates
console.log("\nThe following are the Physics winner IDs: ")
physics.forEach(function(winners){
  console.log(winners.id)
})
console.log("\nThe following are the Nobel Prize categories: ")

// prints the names of all of the prize categories
let nobelPrizes = nobel_prize_winners_2017.prizes
nobelPrizes.forEach(function(categories){
  console.log(categories.category)
})
//prints the total number of prize categories
let i = 0
while(i < nobelPrizes.length){
  i++
}
console.log("The total number of Nobel prize categories is:", i)

//counts the total number of laureates from 2017
let laureateCount = 0

nobelPrizes.forEach(function(prize){
  prize.laureates.forEach(function(laureate){
    laureateCount++
  })
})
console.log("\nThe total laureate count for the 2017 Nobel Prize is:", laureateCount)


