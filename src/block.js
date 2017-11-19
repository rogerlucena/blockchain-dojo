// My Trello link: https://trello.com/b/sdBwhflI/blockchain-dojo
// Theodo's original Trello link: https://trello.com/b/s2zFZmY5/blockchain-dojo

import CryptoJS from 'crypto-js';

import chain from './chain';

export const calcHash = ({index, prevHash, timestamp, data}) => 0;

export const create = (data) => {
    const block = { 
        index: 0,
        timestamp: 0,
        data: 'Hello Blockchain!',
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
