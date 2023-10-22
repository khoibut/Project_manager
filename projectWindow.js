function closeProjectWindow(){
    document.getElementsByClassName("window-create-new-project")[0].style.display="none"
}
function openProjectWindow(){
    document.querySelector(".new-project").innerHTML="New Project"
    document.getElementsByClassName("window-create-new-project")[0].style.display="block"
}
function editProject(project){
    openProjectWindow()
    document.querySelector(".new-project").innerHTML="Edit Project"
}
function submitProject(){
    historyWindow=document.getElementsByClassName("window-history")[0]
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
    templateContent.querySelector(".add-moment").innerHTML=date+' '+time
    templateContent.querySelector(".edit").addEventListener("click",function(){
        editProject(this.parentElement)
    })
    templateContent.querySelector(".delete").addEventListener("click",function(){
        this.parentElement.remove()
    })
    projectName.value=''
    projectURL.value=''
    historyWindow.appendChild(templateContent)
}
let closeProjectButton = document.getElementsByClassName("button-close-window-create-project")[0]
closeProjectButton.addEventListener("click",closeProjectWindow)
let openProjectButton=document.getElementsByClassName("button-create-newproject")[0]
openProjectButton.addEventListener("click",openProjectWindow)
let submitButton=document.getElementsByClassName("create-submit")[0];
submitButton.addEventListener("click",function(){
    submitProject();
})