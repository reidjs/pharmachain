export const RECEIVE_PRODUCTS_QUANTITIES = "RECEIVE_PRODUCTS";
export const RECEIVE_ORDER = "RECEIVE_ORDER";

//must do something to blockchain
export const submitOrder = (order) => {
  return {
    type: RECEIVE_ORDER,
    payload: {
      order
    }
  };
};


// const getExpectedUsageOfProduct = (product) => {
//   return (
//     $.ajax({
//       method: 'GET',
//       url: `/ENTERAPIENDPOINTHERE`
//     })
//   );
// };

// export const borrowRequestOnBlockchain = (data) => dispatch => (
//   postBorrowRequest(data)
//     .then(res => dispatch(borrowRequest(res)))
// );

// export const paybackLoanOnBlockchain = (data) => dispatch => (
//   payBack(data)
//     .then(res => dispatch(paybackLoan(res)))
// );
// export const getLoans = (address) => dispatch => (
//   fetchLoans(address)
//     .then(res => dispatch(receiveLoans(res)))
// );
// export const getProfileThunk = (address) => dispatch => (
//   getProfile(address)
//     .then(res => dispatch(loginUser(res)))
// );


