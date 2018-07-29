$(function () {
  var shopRef = firebase.database().ref('/Shops/1')
  var orderRef = firebase.database().ref('/orders')
  var productRef = firebase.database().ref('/Products/')

  var $itemTable = $('#shop-items');

  const now = new Date();

  function mapStatus(num) {
    if (num === "0") {
      return "Cancelled"
    } else if (num === "1") {
      return "Order Arrived"
    } else if (num === "2") {
      return "Bag Packed"
    }
  }

  orderRef.once('value').then(snapshot => {
    var val = snapshot.val();

    console.log(val);


    var items = snapshot.val().products
    let count = 0;
    let itemList = [];
    let countList = [];
    let finalPrice = val.price;
    for (key in items) {
      count += Number(items[key])
      itemList.push(Number(key))
      countList.push(Number(items[key]))
    }

    console.log(itemList);
    console.log(countList);

    $itemTable.prepend(`<tr class="modal-view"><td>${val.pickup ? "Pickup" : "Delivery"}</td><td>${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} PM </td><td>${count}</td><td>${mapStatus(val.status)}</td><td class="button vibtn has-background-info has-text-white-bis has-text-weight-semibold" style="margin:0.7rem;">View</td></tr>`)

    $('.modal-view').click(function () {
      $('.modal').addClass('is-active')
    })

    $('.modal-close-btn').click(function () {
      $('.modal').removeClass('is-active')
    })

    $('#accept').click(function() {
      orderRef.child('status').set(2)
    })

    $('#decline').click(function() {
      orderRef.child('status').set(0)
    })

    // for (key in items) {
    //   console.log(key);

    for (key in itemList) {      
      console.log(key);
      
      var itemRef = productRef.child(itemList[key]).once('value').then(snap => {
        console.log(snap.val().name);

        $('#items-shop').append(`<tr><td>${snap.val().name}</td><td>${(Math.floor(Math.random() * 10 + 1))}</td><td>${snap.val().offer_price}</td></tr>`)
      })

      console.log(itemList[key])
    }

    $('#total').text(finalPrice)

    // }
  })
});