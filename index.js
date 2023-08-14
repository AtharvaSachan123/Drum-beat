var number=document.querySelectorAll(".drum").length



for(var i=0;i<number;i++)

{
document.querySelectorAll(".drum")[i].addEventListener("click",add);
 function add() {
var buttonInner=this.innerHTML;
makesound(buttonInner);   
}}
document.addEventListener("keypress",function(event){
    makesound(event.key);
});




//detecting buttons press
function makesound(key){
switch(key){
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        this.style.color="white";
        break;
        
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
tom2.play();
this.style.color="black";
break;

case"s":
var tom3=new Audio("sounds/tom-3.mp3");
tom3.play();
this.style.color="blue";
break;

case"d":
var tom4=new Audio("sounds/tom-4.mp3");
tom4.play();
this.style.color="yellow";
break;

case"j":
var tom4=new Audio("sounds/crash.mp3");
tom4.play();
this.style.color="purple";
break;

case"k":
var tom5=new Audio("sounds/kick-bass.mp3");
tom5.play();
this.style.color="pink";
break;

case"l":
var tom6=new Audio("sounds/snare.mp3");
tom6.play();
this.style.color="green";
break;

default:
    console.log(buttonInner);
        
}}


