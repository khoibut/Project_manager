function closeProjectWindow(button){
    document.querySelector(".add-picture").style.background=''
    document.querySelector("[data-image]").value=''
    button.parentElement.style.display="none"
}
function openProjectWindow(button){
    document.querySelector(".new-project").innerHTML="New Project"
    document.getElementsByClassName("window-create-new-project")[0].style.display="block"
    onTop(document.getElementsByClassName("window-create-new-project")[0])
}
function editProject(project){
    openProjectWindow()
    document.querySelector(".new-project").innerHTML="Edit Project"
    submitButton.removeEventListener("click",submitProject)
    submitButton.addEventListener("click",function edit(){
        if(document.getElementsByClassName("project-name")[0].value!=''){
            project.querySelector(".project-name").innerHTML=document.getElementsByClassName("project-name")[0].value
            document.getElementsByClassName("project-name")[0].value=''
        }
        if(document.getElementsByClassName("add-link")[0].value!=''){
        }
        closeProjectWindow(submitButton)
        submitButton.removeEventListener("click",edit)
    })
}
function submitProject(projectName,projectURL,time){
    historyWindow=document.getElementsByClassName("project-container")[0]
    if(projectName==''||projectURL==''){
        window.alert("DIT ME MAY")
        return
    }
    template=document.querySelector("[data-project-template]")
    templateContent=template.content.cloneNode(true);
    templateContent.querySelector(".project-name").innerHTML=projectName
    templateContent.querySelector(".add-moment").innerHTML=time
    templateContent.querySelector(".edit").addEventListener("click",function(){
        editProject(this.parentElement)
    })
    templateContent.querySelector(".delete").addEventListener("click",function(){
        this.parentElement.parentElement.remove()
    })
    historyWindow.appendChild(templateContent)
    closeProjectWindow(submitButton)
}
let closeProjectButton = document.getElementsByClassName("button-close-window-create-project")[0]
closeProjectButton.addEventListener("click",function(){
    closeProjectWindow(this)
})
let openProjectButton=document.querySelectorAll("[data-create]")
openProjectButton.forEach(function(button){
    button.addEventListener("click",openProjectWindow)
})
let submitButton=document.getElementsByClassName("create-submit")[0];
submitButton.addEventListener("click",function(){
    today=new Date()
    date=today.getFullYear()+'-'+String((today.getMonth()+1)).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0')
    projectURL=document.getElementsByClassName("add-link")[0]
    projectName=document.getElementsByClassName("project-name")[0]
    submitProject(projectName.value,projectURL.value,date)
    projectName.value=''
    projectURL.value=''
})