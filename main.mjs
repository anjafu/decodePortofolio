import { translateBrailleBinary } from "./src/brailleTranslator.mjs";
import fs from "node:fs";

function init(){
    let code = fs.readFileSync("data.txt", "utf-8");
    
    let codeBrailleDecoded = translateBrailleBinary(code);
    //console.log(codeBrailleDecoded);
}

init();