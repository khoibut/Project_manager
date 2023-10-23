function draggableWindow(header){
    function dragMouse(e){
        header.parentElement.style.zIndex=100
        for(i=0;i<headers.length;i++){
            if(headers[i]!=header){
                headers[i].parentElement.style.zIndex=0
            }
        }
        mouseX=e.clientX
        mouseY=e.clientY
        document.onmousemove=moveMouse
        document.onmouseup=closeMouse
    }
    function moveMouse(e){
        mouseMovedX=e.clientX
        mouseMovedY=e.clientY
        header.parentElement.style.left=header.parentElement.getBoundingClientRect().left+mouseMovedX-mouseX+'px'
        header.parentElement.style.top=header.parentElement.getBoundingClientRect().top+mouseMovedY-mouseY+'px'
        mouseX=mouseMovedX
        mouseY=mouseMovedY
    }
    function closeMouse(){
        document.onmousemove=null
        document.onmouseup=null
    }
    var mouseY=0
    var mouseX=0
    var mouseMovedX=0
    var mouseMovedY=0
    header.onmousedown=dragMouse
}
const headers=document.querySelectorAll('[data-header]')
for(i=0;i<headers.length;i++){
    draggableWindow(headers[i])
}