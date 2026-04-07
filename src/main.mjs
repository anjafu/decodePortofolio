import { translateBrailleBinary } from "./brailleTranslator.mjs";
import fs from "node:fs";

function init(){
    let code = fs.readFileSync("./data/data.txt", "utf-8");
    
    let codeBrailleDecoded = translateBrailleBinary(code);
    //console.log(codeBrailleDecoded);
}

init();