$(function () {
  $('.modal-view').click(function () {
    $('.modal').addClass('is-active')
  })

  $('.modal-close-btn').click(function () {
    $('.modal').removeClass('is-active')
  })

  var shopRef = firebase.database().ref('/Shops/1')
  var orderRef = firebase.database().ref('/orders')

  var $itemTable = $('#shop-items');

  var $item = orderRef.once('value').then( snapshot => {
    console.log(snapshot.val())
  })
  $itemTable.prepend(`<tr><td>gthtfh</td><td>hft</td><td>hft</td><td>hft</td></tr>`)
});