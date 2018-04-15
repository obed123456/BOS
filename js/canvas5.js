var canvas5=document.getElementById('myCanvas5');

console.log(canvas5);
var c5 = canvas5.getContext('2d');

    canvas5.width=window.innerWidth;
    canvas5.height=window.innerHeight;
if(canvas5.width>768)
{
	canvas5.height=(window.innerHeight/2)+200;
    canvas5.width=window.innerWidth/2;
	c5.beginPath();
	c5.moveTo(canvas5.width,0);
	c5.lineTo(canvas5.width/3,canvas5.height/2);
	c5.lineTo(canvas5.width,canvas5.height);
	c5.fillStyle ="#53b286";
	c5.fill();

}
else{
    canvas5.height=window.innerWidth/2;
	var w5=canvas5.width-20;
    var h5=canvas5.height;
	var imageObj52=new Image();
	imageObj52.onload = function() {
			c5.drawImage(imageObj52, 10, 0,w5,w5/2);
      };
      imageObj52.src = 'images/feature4.png';
	
}
