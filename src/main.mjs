import { translateBrailleBinary } from "./brailleTranslator.mjs";
import { decodeBase64 } from "./base64Translator.mjs";
import {decodeROT} from "./ROTTranslator.mjs";
import fs from "node:fs";

function init(){
    let code = fs.readFileSync("./data/data.md", "utf-8");

    const decoder = pipe(translateBrailleBinary, decodeBase64, decodeROT);

    //returns error -> checks if it is undefined or not
    writeToFile("./data/output.md", decoder(code)) ? console.error(err) : console.log("Saved output to file");
}

init();

function pipe(...functions){
    return function(argument){
        return functions.reduce((previousFunctionsResult, currentFunction) => currentFunction(previousFunctionsResult), argument);
    }
}

function writeToFile(fileRoot, data){
    return fs.writeFile(fileRoot, data, (err) => err);
}