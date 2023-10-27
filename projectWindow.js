function closeProjectWindow(button){
    document.querySelector(".add-picture").style.background=''
    document.querySelector("[data-image]").value=''
    document.querySelector(".project-name").value=''
    document.querySelector(".add-link").value=''
    document.querySelector(".web-adress").value=''
    button.parentElement.style.display="none"
}
function openProjectWindow(button){
    document.querySelector(".new-project").innerHTML="New Project"
    document.getElementsByClassName("window-create-new-project")[0].style.display="block"
    onTop(document.getElementsByClassName("window-create-new-project")[0])
    document.getElementsByClassName("window-create-new-project")[0].style.left=''
    document.getElementsByClassName("window-create-new-project")[0].style.top=''
}
function editProject(project){
    openProjectWindow()
    document.querySelector(".new-project").innerHTML="Edit Project"
    submitButton.removeEventListener("click",cockball)
    submitButton.addEventListener("click",function edit(){
        if(document.getElementsByClassName("project-name")[0].value!=''){
            project.querySelector(".project-name").innerHTML=document.getElementsByClassName("project-name")[0].value
        }
        if(document.getElementsByClassName("add-link")[0].value!=''){
            project.querySelector("[data-src]").innerHTML=document.getElementsByClassName("add-link")[0].value
        }
        if(document.querySelector(".web-adress").value!=''){
            project.querySelector("[data-url]").innerHTML=document.querySelector(".web-adress").value
        }
        if(document.querySelector(".web-adress").value!=''){
            project.querySelector("[data-url]")=document.querySelector(".web-adress").value
        }
        if(document.querySelector(".add-picture").style.background!=''){
            project.querySelector("[data-display]").innerHTML=document.querySelector(".add-picture").style.background
        }
        closeProjectWindow(submitButton)
        submitButton.addEventListener("click",cockball)
        submitButton.removeEventListener("click",edit)
    })
}
function submitProject(projectName,projectURL,projectSrc,projectImage,time){
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
        editProject(this.parentElement.parentElement)
    })
    templateContent.querySelector(".delete").addEventListener("click",function(){
        this.parentElement.parentElement.remove()
    })
    templateContent.querySelector("[data-display]").innerHTML=projectImage
    templateContent.querySelector("[data-url]").innerHTML=projectURL
    templateContent.querySelector("[data-src]").innerHTML=projectSrc
    templateContent.querySelector(".share").addEventListener("click",function(){
        window.open(this.parentElement.parentElement.querySelector("[data-url]").innerHTML,"_blank")
    })
    templateContent.querySelector(".project-name").addEventListener("click",function(){
        openInfo(this.parentElement)
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
function cockball(){
    today=new Date()
    date=today.getFullYear()+'-'+String((today.getMonth()+1)).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0')
    projectSrc=document.getElementsByClassName("add-link")[0]
    projectURL=document.getElementsByClassName("web-adress")[0]
    projectName=document.getElementsByClassName("project-name")[0]
    projectImage=document.getElementsByClassName("add-picture")[0].style.background
    submitProject(projectName.value,projectURL.value,projectSrc.value,projectImage,date)
    projectName.value=''
    projectURL.value=''
    projectSrc.value=''
}
let submitButton=document.getElementsByClassName("create-submit")[0];
submitButton.addEventListener("click",cockball)