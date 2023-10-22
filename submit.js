img=document.querySelector('[data-image]');
img.addEventListener("change",function(){
    console.log(img.files[0]);
    projectImage=new Image(200,200);
    projectImage.src=URL.createObjectURL(img.files[0]);
    document.body.appendChild(projectImage);
})
