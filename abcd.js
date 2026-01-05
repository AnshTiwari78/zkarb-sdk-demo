const {verifyProof} = require("zkarb-sdk");

async function main() {
    const input = {"a" : "2", "b" : "2"};
    const path = "./simple";
    const proof = await verifyProof(input, path);
    console.log(proof);
}

main();