
// We have to specify what version of compiler this code will compile with
pragma solidity ^0.4.11;
  // - getProfile(address)
  //   - coinsIn (int)
  //   - totalBorrowed (int)
  //   - borrowLimit (int)
  //   - reputation (int)
  // - getLoans
  //   - loans (array)
  //     [
  //       - loanId (int)
  //       - paybackAmount (int)
  //       - daysRemaining (int)
  //     ]
  // - borrow(address, amount, ratePercent, durationDays)
  // - payBack(address, loanId)

contract Ibcs {
  uint256 loanIndex = 0;
  struct Loan {
    uint256 loanId;
    uint256 amount;
    uint32 rate; // decimals not supported in solidity; say 100% = 10000 rate, 0.1% = 10 rate
    uint32 origination; // Unix timestamp
    uint32 duration; // Milliseconds
    address borrower;
  }

  struct LoanTransaction {
    uint256 loanId;
    uint32 repayTimestamp; // 0 for missed loans
  }

  struct Profile {
    uint256 blanace;
    Loan[] loans;
    uint256 borrowLimit;
    uint256 reputation;
  }

  mapping (uint256 => Loan) private loans;
  mapping (address => uint256) private balanceOf;
  mapping (address => uint256[]) private currentLoans;
  mapping (address => uint256[]) private loanHistory;

  address private owner;
  string public name;
  string public symbol;
  uint8 public decimals = 18;
  uint256 public totalSupply;
  uint256 public your_wallet_balance =50;
  mapping (bytes32 => uint8) public trans_history;

  // This generates a public event on the blockchain that will notify clients
  event Transfer(address indexed from, address indexed to, uint256 value);
  // This notifies clients about the amount burnt
  event Burn(address indexed from, uint256 value);

  function Ibcs(uint256 initialSupply, string tokenName, string tokenSymbol) {
    totalSupply = initialSupply * 10 ** uint256(decimals);
    owner = msg.sender;
    balanceOf[owner] = totalSupply;
    name = tokenName;
    symbol = tokenSymbol;
  }

  function borrowMoney(uint256 amount) {

  your_wallet_balance = your_wallet_balance+amount;

  }//borrow

  function setBalance (uint256 amount){

  your_wallet_balance = amount;
  }

  function payBack(uint256 amount) { //returns (uint256) {

  your_wallet_balance = your_wallet_balance-amount;

//  return your_wallet_balance;
  }//payBack


  function get_wallet_balance(uint256 candidate) returns (uint256) {

  return your_wallet_balance;
  }

  event orderReceived(address sender, uint test);

  function postOrder(address sender, uint id) returns (bool) {
    orderReceived(sender, id);
    return true;
  }

}

