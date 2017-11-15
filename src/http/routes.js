import express from 'express';

import chain from '../chain';
import { create } from '../block';
import sockets from '../p2p/sockets';
import { connectToPeers } from '../p2p/index';
import { broadcast } from '../p2p/handlers';
import { responseLatestMsg } from '../p2p/actions';

const router = express.Router();

router.get('/health-check', (req, res) =>  res.send('OK'));

router.get('/peers', (req, res) => {
    res.send(sockets.get().map(s => `${s._socket.remoteAddress}:${s._socket.remotePort}`)); // eslint-disable-line no-underscore-dangle
});

router.post('/connect', (req, res) => {
    const { peer } = req.body;
    connectToPeers([peer]);
    console.log('New peer in p2p websocket has been added: ', peer);
    res.send(peer);
});

router.get('/chain', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(chain.get()))
});

router.post('/mine', (req, res) => {
    const block = create(req.body.data)
    .then((block) => {
        console.log('block')
        console.log('block')
        console.log('block')
        console.log('block')
        console.log(block)
        if (block) {
            chain.update(block);
            broadcast(responseLatestMsg());
            console.log('New block in chain has been added: ', block);
            res.send(block);
        } else {
            console.log('Invalid block, dumped', block);
            res.send('wrong block');            
        }
    });
});



export default router;