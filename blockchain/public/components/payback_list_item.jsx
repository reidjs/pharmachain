import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const PaybackListItem = ({loan, payback}) => {
  return (
    <li className="loan-card">
      <h1>#{loan.loanId}</h1>
      <h2>You owe {loan.paybackAmount} ETH</h2>
      <h2>You have {loan.daysRemaining} days remaining</h2>
      <RaisedButton onClick={() => payback(loan.loanId)} label="Pay back loan" />
    </li>
  );
};

export default PaybackListItem;