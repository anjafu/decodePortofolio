function decodeBase64(base64String){
    const buffer = Buffer.from(base64String, 'base64');
    return buffer.toString('utf-8');
}

export {decodeBase64}