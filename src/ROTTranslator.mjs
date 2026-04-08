const alphabet = "abcdefghijklmnopqrstuvwxyz";

//key is the number that it ROT pushed
function decodeROT(string, key){
    //?? operator: leftside is undefined/null? then we do rightside (findkey function), otherwise it does leftside
    key = key ?? findKey(string); //checks if we already have key, if not, find it

    const movedAlphabet = key <= 0 ? alphabet.slice(0,key) + alphabet.slice(key,26) : alphabet.slice(key) + alphabet.slice(0, key);

    return [...string].map((char) => { //creates new array where item is what is returned
        return char.match(/[a-z]/i) ? alphabet[movedAlphabet.indexOf(char)] : char; //only changes the letter
    }).join(""); //makes array into string
}

//finds the key based on most common letter in english letter; e
function findKey(string){
    //only want repeated letter so removes anything that isnt a letter (gi = ALL matches)
    const mostRepeatedLetter = mostRepeatedItem(frequencyCount(string.replace(/[^a-z]/gi, "")));

    return alphabet.indexOf(mostRepeatedLetter) - alphabet.indexOf("e");
}

function frequencyCount(items){
    return [...items].reduce((acc, curr) => { //acc is the object
        acc[curr] = (acc[curr] || 0) + 1; //adds the counter to the object
        return acc; //have to return it to remember it
    },{}); //starts with an empty object
}

function mostRepeatedItem(object){
    return Object.entries(object).reduce((acc, curr) => { //acc is the most repeated item
        return curr[1] > acc[1] ? curr : acc //returns current item if highest
    }).at(0); //dont have to start with empty object because we are just iterating through an existing one
}

export {decodeROT}