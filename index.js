var number=document.querySelectorAll(".drum").length



for(var i=0;i<number;i++)

{
document.querySelectorAll(".drum")[i].addEventListener("click",add);
 function add() {
var buttonInner=this.innerHTML;
makesound(buttonInner);  
Aniamtion(buttonInner)

}}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    Aniamtion(event.key);
});




//detecting buttons press
function makesound(key){
switch(key){
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        
        break;
        
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
tom2.play();

break;

case"s":
var tom3=new Audio("sounds/tom-3.mp3");
tom3.play();

break;

case"d":
var tom4=new Audio("sounds/tom-4.mp3");
tom4.play();

break;

case"j":
var tom4=new Audio("sounds/crash.mp3");
tom4.play();

break;

case"k":
var tom5=new Audio("sounds/kick-bass.mp3");
tom5.play();

break;

case"l":
var tom6=new Audio("sounds/snare.mp3");
tom6.play();

break;

default:
    console.log(buttonInner);
        
}}


function Aniamtion(buttonpress)
{
    var activebutton=document.querySelector("."+buttonpress);
    activebutton.classList.add("pressed");


   setTimeout(function(){
    activebutton.classList.remove("pressed");
   },1000)


}


