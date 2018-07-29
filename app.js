$(function () {
  $('.modal-view').click(function() {
    $('.modal').addClass('is-active')
  })

  $('.modal-close-btn').click(function() {
    $('.modal').removeClass('is-active')
  })

  var shopRef = firebase.databclearase().ref('/Shops/1')
  var orderRef = firebase.database().ref('/orders')
});
            
var data = [
  {
    x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
    y: [1, 3, 6],
    type: 'scatter'
  }
];

Plotly.newPlot('myDiv', data);
