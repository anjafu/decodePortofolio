const defaultSymbols = {
        '100000':'a',
        '110000':'b',
        '100100':'c',
        '100110':'d',
        '100010':'e',
        '110100':'f',
        '110110':'g',
        '110010':'h',
        '010100':'i',
        '010110':'j',
        '101000':'k',
        '111000':'l',
        '101100':'m',
        '101110':'n',
        '101010':'o',
        '111100':'p',
        '111110':'q',
        '111010':'r',
        '011100':'s',
        '011110':'t',
        '101001':'u',
        '111001':'v',
        '010111':'w',
        '101101':'x',
        '101111':'y',
        '101011':'z',

        '010011':'.',
        '010000':',',
        '011001':'?',
        '011010':'!',
        '010010':':',
        '011000':';',
        '001001':'-',
        '000000':' '
    }

const modes = {
    '000001' : capitalMode,
    '000101' : decimalMode,
    '001111' : numberMode
}

const numberSymbols = {
    '100000':'1',
    '110000':'2',
    '100100':'3',
    '100110':'4',
    '100010':'5',
    '110100':'6',
    '110110':'7',
    '110010':'8',
    '010100':'9',
    '010110':'0'
}

function translateBrailleBinary(binaryString){
    const binaryChunksArray = (binaryString.replaceAll(" ","")).match(new RegExp(".{6}", "g"));
    /* not functional solution:
    let decodedString = "";
    
    binaryChunksArray.forEach((binary, i) => {
        const modeActive = modes[binaryChunksArray[i-1]];
        decodedString += modeActive ? modeActive(binary) : defaultMode(binary);
    });

    return decodedString;*/

    //functional ish solution but maybe too messy and complex? also i do use .push() != functional ...
    return binaryChunksArray.reduce((acc, curr) => {
        acc.modeActive && !(modes[curr]) ? acc.arr.push(acc.modeActive(curr)) : acc.arr.push(defaultMode(curr));

        modes[curr] ? acc.modeActive = modes[curr] : acc.modeActive = undefined;
        return acc;
    },{arr: [], modeActive: undefined}).arr.join("");
    //reduce(acc, curr) => acc is previous, curr is current element
}

function defaultMode(binaryString){
    return defaultSymbols[binaryString] ? defaultSymbols[binaryString] : "";
}

function capitalMode(binaryString){
    return (defaultSymbols[binaryString]).toUpperCase();
}

function numberMode(binaryString){
    return numberSymbols[binaryString];
}

function decimalMode(binaryString){
    return "." + numberSymbols[binaryString];
}

export {translateBrailleBinary}