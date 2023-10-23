let closeHistoryButton=document.querySelector(".button-close-window-history")
let openHistoryButton=document.querySelector(".History")
openHistoryButton.addEventListener("click",function(){
    document.getElementsByClassName("window-history")[0].style.display="grid"
})
closeHistoryButton.addEventListener("click",function(){
    document.getElementsByClassName("window-history")[0].style.display="none"
})
