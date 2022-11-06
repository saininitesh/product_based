let menu_click=document.getElementById("menu_icon");
let a=1;
menu_click.addEventListener("click",sum);
function sum(){
    a = a+1;
    let ul = document.getElementById("ul");
    if(a%2==0){
    
    ul.setAttribute('style',' left:0');
    console.log("clicked");
    }else{
    ul.setAttribute('style','left:-100%');
    }
}
//3d look
let navbar=document.getElementById("menu-bar");
window.addEventListener('scroll',function(){
    if(window.pageYOffset >= 80){
        navbar.classList.add("sticky");
       
       
    }else{
        navbar.classList.remove("sticky");
    }
})
