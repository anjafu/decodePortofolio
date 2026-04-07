import { translateBrailleBinary } from "./brailleTranslator.mjs";
import { decodeBase64 } from "./base64Translator.mjs";
import fs from "node:fs";

function init(){
    let code = fs.readFileSync("./data/data.txt", "utf-8");
    
    let codeBrailleDecoded = translateBrailleBinary(code);

    let codeBase64Decoded = decodeBase64(codeBrailleDecoded);
    console.log(codeBase64Decoded);
}

init();