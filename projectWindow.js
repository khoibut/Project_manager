function closeProjectWindow(button){
    button.parentElement.style.display="none"
}
function openProjectWindow(button){
    document.querySelector(".new-project").innerHTML="New Project"
    document.getElementsByClassName("window-create-new-project")[0].style.display="block"
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
function submitProject(){
    historyWindow=document.getElementsByClassName("project-container")[0]
    today=new Date()
    date=today.getFullYear()+'-'+String((today.getMonth()+1)).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0')
    projectURL=document.getElementsByClassName("add-link")[0]
    projectName=document.getElementsByClassName("project-name")[0]
    if(projectName.value==''||projectURL.value==''){
        window.alert("DIT ME MAY")
        return
    }
    time = String(today.getHours()).padStart(2,'0') + ":" + String(today.getMinutes()).padStart(2,'0') + ":" + String(today.getSeconds()).padStart(2,'0')
    template=document.querySelector("[data-project-template]")
    templateContent=template.content.cloneNode(true);
    templateContent.querySelector(".project-name").innerHTML=projectName.value
    templateContent.querySelector(".add-moment").innerHTML=date
    templateContent.querySelector(".edit").addEventListener("click",function(){
        editProject(this.parentElement)
    })
    templateContent.querySelector(".delete").addEventListener("click",function(){
        this.parentElement.parentElement.remove()
    })
    projectName.value=''
    projectURL.value=''
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
submitButton.addEventListener("click",submitProject)