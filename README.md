### A decentralized version of Instagram running on Ethereum blockchain.

## Tools, frameworks and libraries
- ReactJS
- Solidity
- Ethereum
- Ganache
- Truffle
- Infura.io
- Web3.js
- IPFS
- Metamask

## Projec goals
- Create a smart contract with solidity;
- Create a frontend with ReactJS;
- Connect, storage and get data from IPFS network.(InterPlanetary file system)

## Create a smart contract
The smart contract will do the follow:
- Storage a map with hash images which will be stored in IPFS.
- Allow some user tip a amount of ether to another user image.

## Create a frontend
The frontend will have the follow features:
- An input button for user choose some image from its local machine.
- Connect to IPFS network by infura.io.
- Another button that allow the user to upload the image to IPFS.
- If the user pay the gas value to send the image, the app receive the
image's hash and will storage it in the ethereum blockchain.
- Then the frontend can show the images storaged and allow someone tip some ether
for images of another users.

## The project's original focus was to use the local blockchain created by Ganache but I have connected it to the Ropsten Test Network for anyone to use without creating a local blockchain.

A decentralized version of Instagram running on Ethereum blockchain.

## Available Scripts

In the project directory, you can run:

### `npm install`

It will download all the packages required for the app to run in your local machine.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Website Link`
https://ethergram.herokuapp.com/ <br />

## Note-> You should have metamask wallet to run this app. After creating your account switch to the ropsten test network and request some test ethers from https://faucet.metamask.io/ to get going. 

