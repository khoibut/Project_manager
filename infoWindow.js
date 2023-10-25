function openInfo(project){
    let infoWindow=document.querySelector(".window-information")
    infoWindow.style.display="grid"
    onTop(document.querySelector("[data-button]").parentElement)
    infoWindow.querySelector(".link").setAttribute("href",project.querySelector("[project-URL]").innerHTML)
}
{
    let infoWindow=document.querySelector("[data-button]")
    infoWindow.addEventListener("click",function(){
        this.parentElement.style.display="none"
        this.parentElement.style.left=''
        this.parentElement.style.top=''
    })
}