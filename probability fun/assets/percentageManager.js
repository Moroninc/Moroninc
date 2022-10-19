/**
 * 
 * @param {Number} percent;
 * @param {String} topic;
 */
function percentages_To_Wording(percent, topic = 1) {

    // Take the percentage given and gives the saying according to the percent

    if (!percent) { // the if (!variable) basically checks if the valve has anything set to it

        console.warn("err. percentageManager.js: No percentage given");
        return "no percent given";

    };


    /*
        topic 0 = chances of my having a life (doesn't exsit)
        topic 1 = default
        topic 2 = weather
    */


    // yippy

    if (topic === 1) {

        if (percent == 0) { // x = 0%

            return "impossible";

            
        } else if (percent >= 1 && percent <= 10) { // 1% ≤ x ≤ 10%

            return "extraordinarily unlikely";


        } else if (percent >= 11 && percent <= 15) { // 11% ≤ x ≤ 15%

            return "extremely unlikey";


        } else if (percent >= 16 && percent <= 25) { // 16% ≤ x ≤ 25%

            return "very unlikey";


        } else if (percent >= 26 && percent <= 39) { // 26% ≤ x ≤ 39%

            return "moderately unlikey";


        } else if (percent >= 40 && percent <= 49) { // 40% ≤ x ≤ 49%

            return "mostly unlikely";


        } else if (percent == 50) { // x = 50%

            return "equally likely and unlikey to happen";


        } else if (percent >= 51 && percent <= 59) { // 51% ≤ x ≤ 59%

            return "mostly likely";


        } else if (percent >= 60 && percent <= 74) { // 60% ≤ x ≤ 74%

            return "moderately likely";


        } else if (percent >= 75 && percent <= 84) { // 75% ≤ x ≤ 84%

            return "very likely";


        } else if (percent >= 85 && percent <= 89) { // 85% ≤ x ≤ 89%

            return "extremely likely";


        } else if (percent >= 90 && percent <= 99) { // 90% ≤ x ≤ 99%

            return "extraordinarily likely";


        } else if (percent == 100) { // x = 100%

            return "will happen without a doubt";


        };


    } else if (topic === 2) {

        if (percent == 0) { // x = 0%

            return "it won't rain today";


        } else if (percent >= 1 && percent <= 10) { // 1% ≤ x ≤ 10%

            return "extraordinarily low chance of rain";


        } else if (percent >= 11 && percent <= 15) { // 11% ≤ x ≤ 15%

            return "extremely low chance of rain";


        } else if (percent >= 16 && percent <= 25) { // 16% ≤ x ≤ 25%

            return "very low chance of rain";


        } else if (percent >= 26 && percent <= 39) { // 26% ≤ x ≤ 39%

            return "moderately unlikey to have rain";


        } else if (percent >= 40 && percent <= 49) { // 40% ≤ x ≤ 49%

            return "mostly unlikely to have rain";


        } else if (percent == 50) { // x = 50%

            return "equally likely and unlikey to rain";


        } else if (percent >= 51 && percent <= 59) { // 51% ≤ x ≤ 59%

            return "mostly likely to rain";


        } else if (percent >= 60 && percent <= 74) { // 60% ≤ x ≤ 74%

            return "moderately likely to rain";


        } else if (percent >= 75 && percent <= 84) { // 75% ≤ x ≤ 84%

            return "very likely to rain";


        } else if (percent >= 85 && percent <= 89) { // 85% ≤ x ≤ 89%

            return "extremely likely to rain";


        } else if (percent >= 90 && percent <= 99) { // 90% ≤ x ≤ 99%

            return "extraordinarily likely to rain";


        } else if (percent == 100) { // x = 100%

            return "the storm is coming";


        };


    };


};


module.exports = {
    percentages_To_Wording
};
