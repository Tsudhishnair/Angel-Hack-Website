
let cli = document.querySelectorAll(".modal-view");
let clicklist = cli.length;
function modalview() {
  for (let i = 0; i < clicklist; i++) {
    cli = addEventListener("click",function(){
      document.querySelector(".modal").classList.add("is-active");
    });
    
    document.querySelector(".modal-close-btn").classList.remove("is-active");  
}
}
window.addEventListener("load",modalview(),false);