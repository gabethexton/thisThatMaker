'use strict';

// function expecting (int, int, string, string, int)
function thisThatMaker(numA, numB, wordA, wordB, howFar) {

    //basic maker object
    var maker = {
        words: ["None", wordA, wordB, (wordA.concat(wordB))]
    };

    //add maker array for wordA - addresses maker.words at 1 and has zeros for remaining length.
    maker[wordA] = [1];
    maker[wordA].length = numA;
    for (var i = 1; i < maker[wordA].length; i++) {
        maker[wordA][i] = 0;
    }

    //add maker array for wordB - addresses maker.words at 2 and has zeros for remaining length.
    maker[wordB] = [2];
    maker[wordB].length = numB;
    for (var j = 1; j < maker[wordB].length; j++) {
        maker[wordB][j] = 0;
    }

    //is the maker what you made it?
    console.log("MAKER IS: \n", maker);

    //loop and log
    for(var k = 0; k <= howFar; k++) {
        // set first word to current number
        maker.words[0] = k;
        //log the word or words if they're divisible by the given numbers
        console.log(maker.words[maker[wordA][(k % numA)] + maker[wordB][(k % numB)]]);
    }
}

// call it, see what happens!
thisThatMaker(3, 5, "Fizz", "Buzz", 20);
console.log("------------------------------");//easier to read this way...
//try something else...
thisThatMaker(4,7,"Jack", "Wagon", 30);
//make up your own!

