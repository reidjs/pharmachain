const express = require('express');
const contractInstance = require('./deployContract.js');
const web3 = require('./web3Client.js');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + 'public/index.html'));
});


app.get('/getProfile', function(req, res) {
  try {
    var address = req.query.address;
    var bProfile = contractInstance.getProfile.call(address, web3.eth.accounts[1]);
    var profile = {
      coinsIn: bProfile[0].toString(),
      totalBorrowed: bProfile[1].toString(),
      reputation: bProfile[2].toString(),
      borrowLimit: bProfile[3].toString(),
      address: address
    }
    res.send(profile)
  } catch (e) {
    res.status('400').send(`Failed! ${e}`)
  }
});

app.get('/getLoans', function(req,res) {
  var address = req.query.address;
  var unpayedLoanIds = contractInstance.getUnpayedLoanIds.call(address, web3.eth.accounts[0]);
  var unpayedLoans = []
  for(var loanId in unpayedLoanIds) {
    var bLoan = contractInstance.getLoanDetails.call(loanId, web3.eth.accounts[1]);
    var origination = parseInt(bLoan[2].toString());
    var duration = parseInt(bLoan[3].toString());
    var timePassed = new Date() - origination;
    var daysRemaining = (((((duration - timePassed)/1000)/60)/60)/24)
    var loan = {
      loanId: loanId,
      paybackAmount: bLoan[0].toString(),
      daysRemaining: daysRemaining
    };
    unpayedLoans.push(loan);
  }
  res.send(unpayedLoans);
});

app.get('/borrow', function(req, res) {
  var address = req.query.address;
  var amount = req.query.amount;
  var ratePercent = req.query.ratePercent;
  var durationDays = req.query.durationDays;
  var origination = new Date().getTime();
  try{
    console.log(amount, ratePercent, origination, durationDays, address)
    contractInstance.borrow(amount, ratePercent, origination, durationDays, address, { from: web3.eth.accounts[1] }, function(result) {
      // TODO: support failure
      console.log("Borrow result: ", result)
      res.send({ success: true });
    });
  } catch (e) {
    res.status('400').send(`Failed! ${e}`);
  }
});

app.get('/payBack', function(req, res) {
  var address = req.query.address;
  var loanId = req.query.loanId;
  var repayTimestamp = new Date();
  contractInstance.payBack(address, { from: web3.eth.accounts[1] }, function(result) {
    // TODO: support failure
    res.send({ success: true });
  });
});

app.get('/postOrder', function(req, res) {
  var address = web3.eth.accounts[0];
  var order = new Date();
  contractInstance.postOrder.call(address, web3.eth.accounts[1]);
  // res.sendFile(path.join(__dirname + 'public/index.html'));
});


app.listen(3000, function () {
  console.log('App ready and listening on port 3000!')
});
