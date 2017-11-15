import CryptoJS from 'crypto-js';

import chain from './chain';

const DIFFICULTY = 4;

function calcHash({ index, prevHash, timestamp, data }) {
    return new Promise(resolve => {
        let nonce = 0;
        let candidateHash = CryptoJS.SHA256(index + prevHash + timestamp + data + nonce).toString();
        let input;
        while (!isValidHashDifficulty(candidateHash, DIFFICULTY)) {
            console.log("I'm mining!");
            nonce = nonce + 1;
            input = index + prevHash + timestamp + data + nonce;
            candidateHash = CryptoJS.SHA256(input).toString();
        }
        resolve([candidateHash, nonce]);
    })
}

function validateHash({index, prevHash, timestamp, data, nonce, hash}) {
    return hash === CryptoJS.SHA256(index + prevHash + timestamp + data + nonce).toString();
}

function isValidHashDifficulty(hash, difficulty) {
    for (var i = 0, b = hash.length; i < b; i++) {
        if (hash[i] !== '0') {
            break;
        }
    }
    return i >= difficulty;
}

export async function create(data) {
    const prev = chain.last();
    const index = prev.index + 1;
    const timestamp = new Date().getTime();
    const prevHash = prev.hash;
    const [hash, nonce] = await calcHash({ index, prevHash, timestamp, data });
    const newPrev = chain.last();
    console.log(prev);
    console.log('ahaha');
    console.log(newPrev);
    console.log('ooooo');
    if (newPrev !== prev) {
        console.log('wrong block !!!!!!!!')
        return undefined;
    }
    console.log(hash)
    const block = {
        index,
        timestamp,
        data: data,
        prevHash,
        hash,
        nonce
    }
    return block;
}

export const isNewBlockValid = (newBlock, prevBlock = chain.last()) => {
    let isValid = true;
    if (prevBlock.index + 1 !== newBlock.index) {
        console.log('New block has invalid index');
        isValid = false;
    } else if (prevBlock.hash !== newBlock.prevHash) {
        console.log('New block has invalid prevHash');
        isValid = false;
    } else if (validateHash(newBlock) !== newBlock.hash) {
        console.log('New block has invalid hash');
        isValid = false;
    }
    return isValid;
};
