import CryptoJS from 'crypto-js';

import chain from './chain';

export const calcHash = ({index, prevHash, timestamp, data}) => 0;

export const create = (data) => {
    const block = { 
        index: 0,
        timestamp: 0,
        data: data,
        prevHash: 0,
        hash: 0
    }
    // TODO Create block
    return block
};

export const isNewBlockValid = (newBlock, prevBlock = chain.last()) => {
    let isValid = true;
// TODO compute isValid
    return isValid;
};
