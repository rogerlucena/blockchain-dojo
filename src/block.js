import CryptoJS from 'crypto-js';

import chain from './chain';

export const calcHash = ({index, prevHash, timestamp, data}) => 0;

export const create = (data) => {
    const prev = chain.last();
    const index = prev.index + 1;
    const timestamp = new Date().getTime();
    const prevHash = prev.hash;
    const block = { 
        index,
        timestamp,
        data: data,
        prevHash,
        hash: calcHash()
    }
    // TODO Create block
    return block
};

export const isNewBlockValid = (newBlock, prevBlock = chain.last()) => {
    let isValid = true;
// TODO compute isValid
    return isValid;
};
