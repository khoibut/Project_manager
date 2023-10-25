function openInfo(){
    document.querySelector(".window-information").style.display="grid"
    onTop(document.querySelector("[data-button]").parentElement)
}
{
    let infoWindow=document.querySelector("[data-button]")
    infoWindow.addEventListener("click",function(){
        this.parentElement.style.display="none"
        this.parentElement.style.left=''
        this.parentElement.style.top=''
    })
}