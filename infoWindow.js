function openInfo(project){
    let infoWindow=document.querySelector(".window-information")
    infoWindow.style.display="grid"
    console.log(project)
    onTop(document.querySelector("[data-button]").parentElement)
    infoWindow.querySelector(".link").setAttribute("href",project.querySelector("[data-src]").innerHTML)
    infoWindow.querySelector(".project-name").innerHTML=project.querySelector(".project-name").innerHTML
    infoWindow.querySelector(".picture").style.background=project.querySelector("[data-display]").innerHTML
}
{
    let infoWindow=document.querySelector("[data-button]")
    infoWindow.addEventListener("click",function(){
        this.parentElement.style.display="none"
        this.parentElement.style.left=''
        this.parentElement.style.top=''
    })
}