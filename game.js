
var gamePattern = [];
var userPattern =[];
var start = false;
var level = 0;

var buttonColors = ["red","yellow","blue","green"];
var chosenColor ;
var userChosenColor;

// audios

var blue  = new Audio('sounds/blue.mp3');
var green = new Audio('sounds/green.mp3');
var red   = new Audio('sounds/red.mp3');
var wrong = new Audio('sounds/wrong.mp3');
var yellow= new Audio('sounds/yellow.mp3');
$('body').keypress(function(){
  if(start==false){
    start =true;
    nextSquence();
  }else{

  }


});

$(".btn").click(function() {

    userChosenColor =$(this).attr("id");
    userPattern.push(userChosenColor);

//if(start==true){
 var x = userPattern.length-1;
   check(x);


  buttonClicked(userChosenColor);
  pressAnimate(userChosenColor);
  playSound(userChosenColor);
//


});
function check(currentLevel){

 if(userPattern[currentLevel]===gamePattern[currentLevel]){
   if (userPattern.length === gamePattern.length){
     setTimeout(function () {
       nextSquence();
     }, 1000);

 }
 }else{
   gameOver();
}
}
function gameOver(){
 $('h1').text('game Over" Press A Key to Start')
  $('body').addClass('game-over');
  wrong.play();
  setTimeout(function(){
    $('body').removeClass('game-over');
  },300);

  gamePattern = [];
  userPattern = [];
  start = false;
  level =0;

}
function nextSquence(){
  userPattern =[];
  level++;
  $('h1').text('Level :'+level);
  var randomNumber  = Math.floor(Math.random()*4);
 chosenColor = buttonColors[randomNumber];
 gamePattern.push(chosenColor);

 buttonClicked(chosenColor);
 playSound(chosenColor);

}

function buttonClicked(color){
   $('#'+color).fadeIn(100).fadeOut(100).fadeIn(100);
}
function playSound(color){
  switch (color) {
    case "red":
      red.play();
      break;
      case "blue":
        blue.play();
        break;
        case "green":
          green.play();
          break;
          case "yellow":
            yellow.play();
            break;

    default:

  }
}
function pressAnimate(color){
  $('#'+color).addClass('pressed');
  setTimeout(function(){
    $('#'+color).removeClass('pressed');
  },300);
}
