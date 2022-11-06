let menu_click=document.getElementById("menu_icon");
let a=1;
menu_click.addEventListener("click",sum);
function sum(){
    a = a+1;
    let ul = document.getElementById("ul");
    if(a%2==0){
    
    ul.setAttribute('style',' left:0');
    
    }else{
    ul.setAttribute('style',' left:-100%');
    }
}
//3d look
// let n=document.getElementById("login_btn");
// let m=document.getElementById("close_btn");
// let p=document.getElementById("container");
// n.addEventListener('click',click_effect);

// function click_effect(){

//         // p.setAttribute('style','transform:perspective(1100px) rotateY(0deg)');
//         p.setAttribute('style','transform:perspective(1100px) translateX(0%) ');
//         n.setAttribute('style','display:none');
//         m.setAttribute('style','display:block');
         
    
   
    
// }
// m.addEventListener('click',close_fun);
// function close_fun(){
//     p.setAttribute('style','transform:perspective(1100px) translateX(-200%)');
//     n.setAttribute('style','display:block');
//     m.setAttribute('style','display:none');
// }

let navbar=document.getElementById("menu-bar");
window.addEventListener('scroll',function(){
    if(window.pageYOffset >= 80){
        navbar.classList.add("sticky");
       
       
    }else{
        navbar.classList.remove("sticky");
    }
})