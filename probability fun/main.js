// probability is fun
// percentages also following certain wording
// ex. it's very well likely to rain (75%-84%)

const percentageManager = require('./assets/percentageManager'),
    percentage = Math.round(Math.random() * 100), // number 1 to 100
    percentage2 = Math.round(Math.random() * 100);


console.log(percentageManager.percentages_To_Wording(percentage),`(${percentage}%)`);

console.log(percentageManager.percentages_To_Wording(percentage2, 2), `(${percentage2}%)`);