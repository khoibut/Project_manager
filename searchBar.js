{
    let searchBar=document.querySelector("[data-search]")
    projects=document.querySelectorAll("[data-project]")
    searchBar.oninput=function(){
        for(i=0;i<projects.length;i++){
            if(projects[i].querySelector(".project-name").innerHTML.toUpperCase().indexOf(searchBar.value.toUpperCase())>-1){
                projects[i].style.display=''
            }else{
                projects[i].style.display='none'
            }
        }
    }
}