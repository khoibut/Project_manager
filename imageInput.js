function change(image){
    document.querySelector(".add-picture").style.background='url("'+URL.createObjectURL(image)+'")'+" no-repeat"
}
let imageFile=document.querySelector("[data-image]")
document.querySelector("[data-image-button]").addEventListener("click",function(){
    imageFile.click()
})
imageFile.onchange=function(){
    change(imageFile.files[0])
}
let imageDrop=document.querySelector(".add-picture")
let dropZone=false;
document.ondragenter=function(e){
    e.preventDefault()
}
document.ondragover=function(e){
    if(!dropZone){
        imageDrop.style.border="0.25vw dashed #F4FF89"
    }
    e.preventDefault()
}
imageDrop.ondragover=function(e){
    dropZone=true;
    imageDrop.style.border="0.25vw dashed #2df41b"
}
imageDrop.ondragleave=function(e){
    dropZone=false;
}
imageDrop.ondrop=function(e){
    if(e.dataTransfer.files.length==1){
        imageFile.files=e.dataTransfer.files
        change(imageFile.files[0])
    }
}
document.ondrop=function(e){
    dropZone=false
    e.preventDefault()
    imageDrop.style.border="0.25vw dashed rgb(223, 150, 80)"
}