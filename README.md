Blockchain Dojo
========
  
### Installation

To install the project:
```
npm install 
```

This assumes you are using [npm](https://www.npmjs.com/) as your package manager.  

### Quick Start

Set up two connected nodes:

```
HTTP_PORT=3001 P2P_PORT=6001 npm run dev
HTTP_PORT=3002 P2P_PORT=6002 P2P_PEERS=ws://localhost:6001 npm run dev
```

#### HTTP API

- `GET: /chain` -  return current chain of your application.
- `POST: /mine --data {"data": "Some block data"}` -  create new block into the chain.
- `GET: /peers` -  return current peer list of your application.
- `POST: /connect --data {"peer" : "ws://localhost:6002"}` -  add peer to you application.

### Architecture

3 files will be usefull for this Dojo.
- `block.js`: Logic of the blocks 
- `chain.js`: Logic of the chain
- `src/http/routes.js`: Logic of the server routes

### License

MIT
