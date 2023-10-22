function closeProjectWindow(){
    document.getElementsByClassName("window-create-new-project")[0].style.display="none"
}
function openProjectWindow(){
    document.getElementsByClassName("window-create-new-project")[0].style.display="block"
}
let closeProjectButton = document.getElementsByClassName("button-close-window-create-project")[0]
closeProjectButton.addEventListener("click",closeProjectWindow)
let openProjectButton=document.getElementsByClassName("button-create-newproject")[0]
openProjectButton.addEventListener("click",openProjectWindow)