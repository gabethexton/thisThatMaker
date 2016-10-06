'use strict';

function thisThatMaker(numA, numB, wordA, wordB, howFar) {

    var maker = {
        words: ["None", wordA, wordB, (wordA.concat(wordB))]
    };

    maker[wordA] = [1];
    maker[wordA].length = numA;
    for (var i = 1; i < maker[wordA].length; i++) {
        maker[wordA][i] = 0;
    }

    maker[wordB] = [2];
    maker[wordB].length = numB;
    for (var j = 1; j < maker[wordB].length; j++) {
        maker[wordB][j] = 0;
    }

    console.log("MAKER IS: \n", maker);

    for(var k = 0; k <= howFar; k++) {
        // console.log("I is: ", i);
        maker.words[0] = k;
        // console.log(maker.words[0]);
        console.log(maker.words[maker[wordA][(k % numA)] + maker[wordB][(k % numB)]]);
    }
}



thisThatMaker(3, 5, "Fizz", "Buzz", 20);
console.log("------------------------------");
thisThatMaker(4,7,"Jack", "Wagon", 30);
