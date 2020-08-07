document.querySelector('.w').addEventListener('click', function(){
	var audio1 =new Audio('./sounds/tom1.mp3');
	audio1.play();
	this.style.color='white';
	pressed('w');
});
document.querySelector('.a').addEventListener('click', function(){
	var audio2=new Audio('./sounds/tom2.mp3');
	audio2.play();
	this.style.color='white';
	pressed('a');
	board();
});
document.querySelector('.s').addEventListener('click', function(){
	var audio3=new Audio('./sounds/tom3.mp3');
	audio3.play();
	this.style.color='white';
	pressed('s');
	board();
});
document.querySelector('.d').addEventListener('click', function(){
	var audio4=new Audio('./sounds/tom4.mp3');
	audio4.play();
	this.style.color='white';
	pressed('d');
	board();
});
document.querySelector('.j').addEventListener('click', function(){
	var audio5=new Audio('./sounds/crash.mp3');
	audio5.play();
	this.style.color='white';
	pressed('j');
	board();
});
document.querySelector('.k').addEventListener('click', function(){
	var audio6=new Audio('./sounds/kick-bass.mp3');
	audio6.play();
	this.style.color='white';
	pressed('k');
	board();
});
document.querySelector('.l').addEventListener('click', function(){
	var audio7=new Audio('./sounds/snare.mp3');
	audio7.play();
	this.style.color='white';
	pressed('l');
	board();
});
function board(){
	document.addEventListener("keydown", (ev) => {
		console.log(ev.key);
		switch(ev.key){
			case 'w':var audio1 =new Audio('./sounds/tom1.mp3');
			audio1.play();
			this.style.color='white';
			pressed(ev.key);
			break;
			case 'a':var audio2=new Audio('./sounds/tom2.mp3');
			audio2.play();
			this.style.color='white';
			pressed(ev.key);
			break;
			case 's':var audio3 =new Audio('./sounds/tom3.mp3');
			audio3.play();
			this.style.color='white';
			pressed(ev.key);
			break;
			case 'd':var audio4=new Audio('./sounds/tom4.mp3');
			audio4.play();
			this.style.color='white';
			pressed(ev.key);
			break;
			case 'j':var audio5=new Audio('./sounds/crash.mp3');
			audio5.play();
			this.style.color='white';
			pressed(ev.key);
			break;
			case 'k':var audio6=new Audio('./sounds/kick-bass.mp3');
			audio6.play();
			this.style.color='white';
			pressed(ev.key);
			break;
			case 'l':var audio7=new Audio('./sounds/snare.mp3');
			audio7.play();
			this.style.color='white';
			pressed(ev.key);
			break;
			default:console.log('error');
			break;
		}
	});
}
board();

function pressed(key){
	document.querySelector('.'+key).classList.add("pressed");
	setTimeout(function(){
		document.querySelector('.'+key).classList.remove("pressed");
	},250);
}