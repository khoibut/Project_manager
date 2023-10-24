function draggableWindow(window){
    function dragMouse(e){
        window.style.zIndex=100
        for(i=0;i<windows.length;i++){
            if(windows[i]!=window){
                windows[i].style.zIndex=0
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
        window.style.left=window.getBoundingClientRect().left+mouseMovedX-mouseX+'px'
        window.style.top=window.getBoundingClientRect().top+mouseMovedY-mouseY+'px'
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
    window.onmousedown=dragMouse
}
const windows=document.querySelectorAll('[data-window]')
for(i=0;i<windows.length;i++){
    draggableWindow(windows[i])
}