function decodeBase64(base64String){
    const buffer = Buffer.from(base64String, 'base64');
    const rawOutput = buffer.toString('utf-8'); //changed the text to utf-8 BUT doesnt check for corrupt data

    return rawOutput.match(/^[\x20-\x7E\s]*/)[0].trim();//removes corrupted data
}

export {decodeBase64}