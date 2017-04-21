//Load Module
var EncDec = require('EncDec');


//Usage
var enc = EncDec.encode('key123', 'Hello World');
console.log('Encrypted: ', enc);

var dec = EncDec.decode('key123',enc);
console.log('Decrypted: ', enc);