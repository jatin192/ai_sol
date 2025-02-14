const bs58 = require('bs58');

// Check if a private key was provided as a command line argument
if (process.argv.length < 3) {
    console.log("Please provide your base58 private key as a command line argument");
    console.log("Usage: node decode58.ts <base58-private-key>");
    process.exit(1);
}

const base58PrivateKey = process.argv[2];

try {
    // Decode the base58 private key to Uint8Array
    const decodedKey = bs58.decode(base58PrivateKey);
    
    // Convert to regular array
    const privateKeyArray = Array.from(decodedKey);

    console.log("\nYour private key in array format (use this in .env):");
    console.log(JSON.stringify(privateKeyArray));
    
    if (privateKeyArray.length !== 64) {
        console.log("\nWarning: The decoded key length is not 64 bytes. This might not be a valid Solana private key.");
    }
} catch (error) {
    console.error("Error: Invalid base58 format");
    process.exit(1);
}
