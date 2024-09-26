// Selcet model-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn .OPEN-MODAL to modal-overlay
// when user clicks close-btn remove .OPEN-MODAL from
// modal-overlay

const modalbtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closebtn = document.querySelector(".close-btn");

modalbtn.addEventListener("click",function(){
    modal.classList.add("open-modal");
});
closebtn.addEventListener("click",function(){
    modal.classList.remove("open-modal"); 
});