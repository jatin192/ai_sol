const bs58 = require('bs58');

const privateKeyArray = [64,113,167,115,112,241,44,56,172,168,66,192,251,96,215,253,35,23,159,116,14,43,87,69,46,95,234,36,54,2,240,181,8,162,220,88,60,250,225,200,60,200,24,173,164,172,188,183,141,204,193,160,184,69,8,226,230,181,5,209,46,124,65,63];
const privateKeyUint8 = new Uint8Array(privateKeyArray);
const privateKeyBase58 = bs58.encode(privateKeyUint8);

console.log("Your Base58 encoded private key (use this to import in Solana wallet):");
console.log(privateKeyBase58);
