$(function () {
  $('.modal-view').click(function() {
    $('.modal').addClass('is-active')
  })

  $('.modal-close-btn').click(function() {
    $('.modal').removeClass('is-active')
  })

  var shopRef = firebase.database().ref('/Shops/1')
  var orderRef = firebase.database().ref('/orders')
});