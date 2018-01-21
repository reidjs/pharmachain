export const RECEIVE_SHIPMENT_CONFIRMATION = "RECEIVE_SHIPMENT_CONFIRMATION";
export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_PREDICTION = "RECEIVE_PREDICTION";
//must do something to blockchain
export const submitOrder = (order) => {
  // console.log('order')
  $.ajax({
    method: 'POST',
    url: `/payBack`,
    data: {
      test: 0
    }
  });
  return {
    type: RECEIVE_ORDER,
    payload: {
      order
    } 
  };
};

export const confirmShipment = (shipment) => {
  // console.log('order');
  $.ajax({
    method: 'POST',
    url: `/payBack`,
    data: {
      test: 0
    }
  });
  return {
    type: RECEIVE_SHIPMENT_CONFIRMATION,
    payload: {
      shipment
    } 
  };
};

export const getPrediction = () => {
  let order = {
    products: {
      'vaccine': {img: "../assets/syringe.svg", name: 'vaccine', amount: 5, buyAmount: 3},
      'advil': {img: "../assets/pill.svg", name: 'advil', amount: 12, buyAmount: 18},
      'cot': {img: "../assets/bed.svg", name: 'cot', amount: 1, buyAmount: 1},
      'lipitor': {img: "../assets/pill.svg", name: 'lipitor', amount: 12, buyAmount: 5},
     }
  };
  return {
    type: RECEIVE_PREDICTION, 
    payload: {
      order
    }
  }
}



// const getExpectedUsageOfProduct = (product) => {
//   return (
//     $.ajax({
//       method: 'GET',
//       url: `/ENTERAPIENDPOINTHERE`
//     })
//   );
// };

//realistically this should be a post request
const submitOrderToBlockchain = (order) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/postOrder`
    })
  );
};


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


