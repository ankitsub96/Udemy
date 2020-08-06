var player1=Math.ceil(Math.random()*6); console.log(player1); var
player2=Math.ceil(Math.random()*6); console.log(player2);
var dom=document.querySelector('h1');
if (player1>player2){
	dom.textContent="🚩Player 1 wins!!🚩";
}
else if(player2>player1){
	dom.textContent="🚩Player 2 wins!!🚩";
}
else{
	dom.textContent="🚩Its a draw!!!🚩";
}
var img1="images/dice"+player1+".png";
console.log(img1);
var img2="images/dice"+player2+".png";
console.log(img2);
document.querySelector('.img1').setAttribute("src",
img1);
document.querySelector('.img2').setAttribute("src",
img2);