function saveOnExit(){
    projects=document.querySelectorAll('[data-project]')
    localStorage.setItem("quanity",projects.length)
    console.log(projects.length)
    for(i=0;i<projects.length;i++){
        localStorage.setItem("project"+i+"Name",projects[i].querySelector(".project-name").innerHTML)
        localStorage.setItem("project"+i+"Time",projects[i].querySelector(".add-moment").innerHTML)
    }
}
function loadOnStart(){
    quanity=+localStorage.getItem("quanity")
    for(i=0;i<quanity;i++){
        submitProject(localStorage.getItem("project"+i+"Name"),"ASS",localStorage.getItem("project"+i+"Time"))
    }
}
loadOnStart()
window.addEventListener("beforeunload",saveOnExit)