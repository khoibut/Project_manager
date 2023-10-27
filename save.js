function saveOnExit(){
    projects=document.querySelectorAll('[data-project]')
    localStorage.setItem("quanity",projects.length)
    console.log(projects.length)
    for(i=0;i<projects.length;i++){
        localStorage.setItem("project"+i+"Name",projects[i].querySelector(".project-name").innerHTML)
        localStorage.setItem("project"+i+"Time",projects[i].querySelector(".add-moment").innerHTML)
        localStorage.setItem("project"+i+"url",projects[i].querySelector("[data-url]").innerHTML)
        localStorage.setItem("project"+i+"src",projects[i].querySelector("[data-src]").innerHTML)
    }
}
function loadOnStart(){
    quanity=+localStorage.getItem("quanity")
    for(i=0;i<quanity;i++){
        submitProject(localStorage.getItem("project"+i+"Name"),
        localStorage.getItem("project"+i+"url"),
        localStorage.getItem("project"+i+"src"),
        "",
        localStorage.getItem("project"+i+"Time"))
    }
}
loadOnStart()
window.addEventListener("beforeunload",saveOnExit)