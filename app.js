$(function () {
  var shopRef = firebase.database().ref('/Shops/1')
  var orderRef = firebase.database().ref('/orders')
  var productRef = firebase.database().ref('/Products/')

  var $itemTable = $('#shop-items');

  const now = new Date();

  function mapStatus(num) {
    if (num === 1) {
      return "Order Arrived"
    } else if (num === 2) {
      return "Packing"
    } else if (num === 3) {
      return "Bag Packed"
    }
  }

  orderRef.once('value').then(snapshot => {
    var val = snapshot.val();

    var items = snapshot.val().products
    let count = 0;
    for (key in items) {
      count += Number(items[key])
    }

    $itemTable.prepend(`<tr class="modal-view"><td>Pickup</td><td>${now.toLocaleTimeString()}</td><td>${count}</td><td>${mapStatus(val.status)}</td></tr>`)

    $('.modal-view').click(function () {
      $('.modal').addClass('is-active')
    })

    $('.modal-close-btn').click(function () {
      $('.modal').removeClass('is-active')
    })

    for (key in items) {
      var itemRef = productRef.child('/key')
      $('#items-shop').append(`<tr><td>${key}</td><td>${itemRef.name}</td><td>${items[key]}</td><td>${items[key] * itemRef.offer_price}</td></tr>`)
    }
  })
});