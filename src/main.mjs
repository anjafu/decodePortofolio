import { translateBrailleBinary } from "./brailleTranslator.mjs";
import { decodeBase64 } from "./base64Translator.mjs";
import {decodeROT} from "./ROTTranslator.mjs";
import fs from "node:fs";

function init(){
    let code = fs.readFileSync("./data/data.txt", "utf-8");

    const decoder = pipe(translateBrailleBinary, decodeBase64, decodeROT);

    console.log(decoder(code));

    //console.log(translateBrailleBinary(code));
}

init();

function pipe(...functions){
    return function(argument){
        return functions.reduce((previousFunctionsResult, currentFunction) => currentFunction(previousFunctionsResult), argument);
    }
}