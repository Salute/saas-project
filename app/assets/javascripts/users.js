/* global $, Stripe */
//Document ready
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  
  //Set Stripe public key
  Stripe.setPublishable( $('meta[name="stripe-key"]').attr('content') );
  
  //Prevent default submission
  submitBtn.click(function(event){
    event.preventDefault()
    
  //Collect credit card fields
  var ccNum = $('#card_number').val(),
      cvcNum = $('#card_code').val(),
      expMonth = $('#card_month').val(),
      expYear = $('#card_year').val();
      
  //Send card info to Stripe
  Stripe.createToken( {
      number: ccNum;
      cvc: cvcNum;
      exp_month: expMonth;
      exp_year: expYear
    }, stripeResponseHandler);
  });
  //Send card info to Stripe
  //Stripe will return a card token
  //Inject card token as hidden field into form
  //Submit form to our rails app
});