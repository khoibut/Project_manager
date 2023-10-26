function closeAllWindows(){
    for(i=0;i<windows.length;i++){
        windows[i].style.display='none'
        windows[i].style.left=''
        windows[i].style.top=''
    }
}
function onTop(window){
    window.style.zIndex=10;
    windows.forEach(element => {
        if(element!=window){
            element.style.zIndex=+element.style.zIndex-1
        }
    });
}
{
    let windows=document.querySelectorAll('[data-window]')
    let homeButton=document.querySelector('.Home')
    homeButton.addEventListener("click",function(){
        closeAllWindows()
    })
}