document.querySelector('.w').addEventListener('click', function(){
	var audio1 =new Audio('./sounds/tom1.mp3');
	audio1.play();
	this.style.color='white';
});
document.querySelector('.a').addEventListener('click', function(){
	var audio2=new Audio('./sounds/tom2.mp3');
	audio2.play();
	this.style.color='white';
	board();
});
document.querySelector('.s').addEventListener('click', function(){
	var audio3=new Audio('./sounds/tom3.mp3');
	audio3.play();
	this.style.color='white';
	board();
});
document.querySelector('.d').addEventListener('click', function(){
	var audio4=new Audio('./sounds/tom4.mp3');
	audio4.play();
	this.style.color='white';
	board();
});
document.querySelector('.j').addEventListener('click', function(){
	var audio5=new Audio('./sounds/crash.mp3');
	audio5.play();
	this.style.color='white';
	board();
});
document.querySelector('.k').addEventListener('click', function(){
	var audio6=new Audio('./sounds/kick-bass.mp3');
	audio6.play();
	this.style.color='white';
	board();
});
document.querySelector('.l').addEventListener('click', function(){
	var audio7=new Audio('./sounds/snare.mp3');
	audio7.play();
	this.style.color='white';
	board();
});
function board(){
	document.addEventListener("keydown", (ev) => {
		console.log(ev.key);
		switch(ev.key){
			case 'w':var audio1 =new Audio('./sounds/tom1.mp3');
			audio1.play();
			this.style.color='white';
			break;
			case 'a':var audio2=new Audio('./sounds/tom2.mp3');
			audio2.play();
			this.style.color='white';
			break;
			case 's':var audio3 =new Audio('./sounds/tom3.mp3');
			audio3.play();
			this.style.color='white';
			break;
			case 'd':var audio4=new Audio('./sounds/tom4.mp3');
			audio4.play();
			this.style.color='white';
			break;
			case 'j':var audio5=new Audio('./sounds/crash.mp3');
			audio5.play();
			this.style.color='white';
			break;
			case 'k':var audio6=new Audio('./sounds/kick-bass.mp3');
			audio6.play();
			this.style.color='white';
			break;
			case 'l':var audio7=new Audio('./sounds/snare.mp3');
			audio7.play();
			this.style.color='white';
			break;
			default:console.log('error');
			break;
		}
	});
}
board();