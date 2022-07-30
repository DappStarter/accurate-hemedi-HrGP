require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remember arrow hope clinic bottom ghost'; 
let testAccounts = [
"0xaf37f88661ed481c04fa4b8c22de1c0271d6c921e6e5a442d6b505f739347cd7",
"0x03786d3e0b003af63ca93e0c5a7288f05bb7fb28e73780dbe29e310a3ec0c401",
"0x87c4c1487731d489d2fbf20614651510d3cb23aca82ff955695ae9072defe1c2",
"0xed48c63eee84c4897d0623b18a84aaa1f8bdd4c1726dc7b705323ce1b8522879",
"0x86bfb3fcbcd24505cf6193af7222f5c7f1b20ff90d9f58b1eefffd68408e0284",
"0x2912e009e72ac6776dafd73e2c6db327b793d2bfae6f75160eca6b49118e5a47",
"0x128beb46ca0ed51043e3ae23310be899357a2dd4fe643b32c57bc20935394f05",
"0x3ccd8f1db35795284156691f0a3770a61ed1146746c900f141a0fd44df7e8759",
"0x919a15e9b8e9cf183372ab3e9e44e74d989fe1c4490d5c6bf4da1eaee64fd561",
"0x3dc315a628c89634ab132d80e267911c841d96cc468dc55b4d55e9ba7a6a8c40"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


