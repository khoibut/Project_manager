let imageFile=document.querySelector("[data-image]")
document.querySelector("[data-image-button]").addEventListener("click",function(){
    imageFile.click()
})
imageFile.onchange=function(){
    console.log(imageFile.files[0].name)
}
