import { isNewBlockValid } from './block';

const Chain = (function () { // eslint-disable-line func-names
    let instance;
    const origin = {
        index: 0,
        timestamp: 0,
        data: 'Hello Blockchain!',
        prevHash: 0,
        hash: 0,
    };
    let chain = [origin];

    function isChainValid(newChain) {
        let isValid = true;
        if (JSON.stringify(newChain[0]) !== JSON.stringify(origin)) {
            console.log('Received chain is invalid. Origin block does not coincide');
            isValid = false;
            return isValid;
        }

        const tempChain = [newChain[0]];
        for (let i = 1; i < newChain.length; i += 1) {
            if ((0, _block.isNewBlockValid)(newChain[i], tempChain[i - 1])) {
                tempChain.push(newChain[i]);
            } else {
                isValid = false;
                return isValid;
            }
        }
        return isValid;
    }

    function get() {
        return chain;
    }

    function update(block) {
        chain.push(block)
    }

    function last() {
        return chain.slice().pop();
    }

    function replace(newChain) {
        chain = newChain;
    }

    function create() {
        return {
            get,
            update,
            last,
            replace
        };
    }

    return {
        init() {
            if (!instance) {
                instance = create();
            }
            return instance;
        }
    };
}());

export default Chain.init();
