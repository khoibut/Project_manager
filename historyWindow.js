let closeHistoryButton=document.querySelector(".button-close-window-history")
let openHistoryButton=document.querySelector(".History")
openHistoryButton.addEventListener("click",function(){
    document.getElementsByClassName("window-history")[0].style.display="grid"
    onTop(document.getElementsByClassName("window-history")[0])
    document.getElementsByClassName("window-history")[0].style.top=''
    document.getElementsByClassName("window-history")[0].style.left=''
})
closeHistoryButton.addEventListener("click",function(){
    document.getElementsByClassName("window-history")[0].style.display="none"
})
