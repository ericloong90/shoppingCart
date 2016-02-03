$(function() {

var addButton = $('#add-button');
var totalQuantity = 0;
var totalPrice = 0;

function submitItem () {
  var itemName = $('#item-name').val();
  var unitPrice = parseInt($('#unit-price').val(), 10);
  var quantity = parseInt($('#quantity').val(), 10);

  var subtotal = unitPrice * quantity;

  var tempString = '<tr><td>' + itemName + '</td><td>' +
    unitPrice + '</td><td>' + quantity + '</td><td>' +
    subtotal + '</td></tr>';

  $(tempString).insertBefore('#input-row');

  $('#item-name, #unit-price, #quantity').val("");


  totalQuantity += quantity;
  totalPrice += subtotal;

  $('#total-quantity').html(totalQuantity);
  $('#total-price').html(totalPrice);
}

addButton.on('click', submitItem);

});

