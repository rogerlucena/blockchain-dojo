import { calcHash, isNewBlockValid } from './block';

const Chain = (function () { // eslint-disable-line func-names
    let instance;
    const origin = {
        index: 0,
        timestamp: 0,
        data: 'Hello Blockchain!',
        prevHash: 0,
        hash: calcHash({
            index: 0,
            prevHash: 0,
            timestamp: 0,
            data: 'Hello Blockchain!'
        })
    };
    const chain = [origin];

    function isChainValid(newChain) {
        let isValid = true;
        // TODO compute isValid
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
        // TODO replace new chain
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
