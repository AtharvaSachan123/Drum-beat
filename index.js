var number=document.querySelectorAll(".drum").length



for(var i=0;i<number;i++)

{
document.querySelectorAll(".drum")[i].addEventListener("click",add);
 function add() {

this.style.color="white";




    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}}