const alphabet = {
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
    '000001' : 'uppercase',
    '000101' : 'decimal',
    '001111' : 'number'
}

const numbers = {
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
    let decodedString = "";

    const binaryStringChunks = (binaryString.replaceAll(" ","")).match(new RegExp(".{6}", "g"));

    for (let index in binaryStringChunks){
        let currentBinary = binaryStringChunks[index];
        let previousBinary = binaryStringChunks[index - 1]; //to see if its a mode before it

        if (modes[previousBinary]){ //if previous binary was a mode
            if(modes[previousBinary] == 'uppercase'){
                decodedString += (alphabet[currentBinary]).toUpperCase();
            } else if(modes[previousBinary] == 'decimal'){
                decodedString += "." + numbers[currentBinary];
            } else if(modes[previousBinary] == 'number'){
                decodedString += numbers[currentBinary];
            }

        } else if(alphabet[currentBinary]){ //ignore modes
            decodedString += alphabet[currentBinary];
        }
    }
    
    return decodedString;
}

export {translateBrailleBinary}