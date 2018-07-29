TESTER = document.getElementById('tester');

Plotly.plot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], { 
    margin: { t: 0 } } );

    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }
  $(function () {
    $('.modal-view').click(function () {
      $('.modal').addClass('is-active')
    })
  
    $('.modal-close-btn').click(function () {
      $('.modal').removeClass('is-active')
    })
  });



  
document.