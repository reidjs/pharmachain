# Sugar Score Credit rating and Reputation system

- stack: Node.js, react, solidity, web3


# To Run:

To setup:
1. install `npm` if you don't already have it https://nodejs.org/en/
2. run `npm install`

To start, first run testRPC server, then run app server.

1. run `npm run testRPC`
2. run `npm start`
3. navigate to localhost:3000


# Directories

- blockchain
  - node_modules
  - public
   - assets
   - components
   - bundle.js
   - index.html
   - index.js
   - package.json
   - style.css
   - webpack.config.js
  - .gitignore
  -deployContract.js
  -ibcs.solidity
  -package.json
  -server.js
  web3Client.js


# API:
    - getProfile(address)
    - coinsIn (int)
    - totalBorrowed (int)
    - borrowLimit (int)
    - reputation (int)
    - getLoans(address)
    - loans (array)
      [
         loanId (int)
         paybackAmount (int)
         daysRemaining (int)
      ]
    - borrow(address, amount, ratePercent, durationDays)
    - payBack(address, loanId)
