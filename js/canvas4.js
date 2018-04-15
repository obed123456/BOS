var canvas4=document.getElementById('myCanvas4');
var c4 = canvas4.getContext('2d');

    canvas4.width=window.innerWidth;
    canvas4.height=window.innerHeight;
if(canvas4.width>768)
{
	canvas4.height=(window.innerHeight/2)+200;
    canvas4.width=window.innerWidth/2;
	c4.beginPath();
	c4.moveTo(0,0);
	c4.lineTo(500,250);
	c4.lineTo(0,527);
	c4.fillStyle ="#53b286";
	c4.fill();
	
	var imageObj41=new Image();
	imageObj41.onload = function() {
			c4.drawImage(imageObj41,70,80,520,360);
      };
      imageObj41.src = 'images/feature3.png';
   
}
else{
    canvas4.height=window.innerWidth/2;
	var w4=canvas4.width-20;
    var h4=canvas4.height;
    var imgH2=w4/4;
	var imageObj42=new Image();
	imageObj42.onload = function() {
			c4.drawImage(imageObj42, 10, 0,w4,w4/2);
      };
      imageObj42.src = 'images/feature3.png';
	
}
