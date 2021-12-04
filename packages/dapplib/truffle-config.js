require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember erosion hover entire front spirit'; 
let testAccounts = [
"0xa4debe59c10ee63f8a828d18895738f6d61db2a03a0a63a00d3489e5b0f2f4a9",
"0xb22b370597dcfbe6c1cd8d6aa368cd30e760774171da5bdff09a86ecf021835b",
"0x7fc391f367d3375d96b6a048ab630d91a50439fb9dfe3b4813bd9e3dff63c319",
"0x8488b840c6b16e493ff9ae1372b1b5861c457417fb7f8d926e600bce668424eb",
"0xe368c3b3afd8ef2846763596c3134ee169f6be3b07ac556fc7dc44df20f4405f",
"0x3012a6a1ed9af69092e265fdee12b038d2dda4caeeb21027968f099caa8e71ae",
"0x54c600d4108e814318006fc0585f6557f84362ac07c9c54f370ad9415e7f86a6",
"0x051b56e3a7bdbd065f2cd43cd709d8afff0cb3b8ec535c103d349da591e8accb",
"0x4d0a0740d5cbc96483fe98263b14b055befecf931b4037e6d5ff3ea2a6f28b30",
"0x96ba7d0181df2c83345f06c294c8979fc1ed3b43c4b35f9034ba0240bbc5f249"
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


