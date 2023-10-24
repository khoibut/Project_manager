function closeAllWindows(){
    for(i=0;i<windows.length;i++){
        windows[i].style.display='none'
    }
}
{
    let windows=document.querySelectorAll('[data-window]')
    let homeButton=document.querySelector('.Home')
    homeButton.addEventListener("click",function(){
        closeAllWindows()
    })
}