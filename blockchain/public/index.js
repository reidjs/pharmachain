$(document).ready(function() {

  fetch('/wallet_total')
    .then(res => res.json())
    .then(res => {

      //alert(JSON.stringify(res));

       $('.current_eth').html('<h2 class="current_eth"> Current ETH in wallet : '+res.total_amount_wallet+' </h2>');

    }).catch(function(err) {
      // Error :(
    });//fetch




//borrow button

$('#voteSubmit').click(function(event) {

alert('borrow money');




    const headers = new Headers({
      "Content-Type": "application/json",
    });

        fetch('/borrow', {
          method: 'post',
          headers: headers,
          body: JSON.stringify(
            { address: "0x81f1b97c1196ffcfd451dcf6d3f183a55c7c962d4a969e04356ddadf24034a7e",
               amount: 300,
               ratePercent: 5,
               durationDays:60

          }),
        })
        .then(res => res.json())
        .then(res => {

          alert(JSON.stringify(res));

          $('.current_eth').html('Current ETH in wallet :'+res.ammount);
        }).catch(function() {

          // Error
        });

}); //end borrow money


//repay button click
  $('#pay_back_currency').click(function(event) {

      var bAmmount = $('#borrow_ammount').val();

    $('.title_score').html('<h1>Your International Blockchain Credit Score : '+730+' pt</h1>');

  //  alert('Thanks for paying back '+  $('#payback_ammount').val() +" ETH");

    const headers = new Headers({
      "Content-Type": "application/json",
    });

        fetch('/payBack', {
          method: 'post',
          headers: headers,
          body: JSON.stringify({ ammount: $('#payback_ammount').val() }),
        })
        .then(res => res.json())
        .then(res => {

          //alert(JSON.stringify(res));

          $('.table_of_transactions').append('<tr>'
          +'<th class="pay_back">+ 0xb486c98b3763fdea6d6e809d53fda51a0273b34bc31d3aa760664859a401be3e</th>'
            +'<th>'+bAmmount+' ETH</th>'
            +'<th>+10 points</th>'
            +'<th>Jan/2/2018</th>'
          +'</tr>');

          $('.current_eth').html('Current ETH in wallet :'+res.ammount);
        }).catch(function() {

          // Error
        });

  });//end pay back
});
