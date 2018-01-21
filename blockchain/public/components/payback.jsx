import React from 'react';
import PaybackListItem from './payback_list_item';
import RaisedButton from 'material-ui/RaisedButton';

class Payback extends React.Component {
  constructor(props) {
    super(props);
    this.loans = this.props.loans;

  }
  componentWillMount() {
    // this.props.getloans(this.props.user.address);
    // debugger
  }
  componentWillReceiveProps(nextProps) {
    // nextProps.loans
    // debugger
    console.log(nextProps.loans)
  }
  render() {
    let loanList = this.props.loans.map((loan) => {
      return (
        <PaybackListItem loan={loan} payback={this.props.payback} />
      );
    });
    return (
      <div>
      <ul id="loans">
        {loanList}
      </ul>
      <div id="external">
        <a href="https://www.propy.com"><RaisedButton label="Get a mortgage for your house on propy.com!" secondary={true} /></a>
        <a href="https://usa.visa.com/pay-with-visa/find-card/"><RaisedButton label="Instantly get a credit card" secondary={true}/></a>
      </div>
    </div>
    );
  }
}

export default Payback;