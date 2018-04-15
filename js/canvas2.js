var canvas2=document.getElementById('myCanvas2');
var c2 = canvas2.getContext('2d');

    canvas2.width=window.innerWidth;
    canvas2.height=window.innerWidth;

if(canvas2.width>768)
{
	canvas2.height=(window.innerHeight/2)+200;
    canvas2.width=window.innerWidth/2;
	c2.beginPath();
	c2.moveTo(0,0);
	c2.lineTo(500,250);//w/2=241.5
	c2.lineTo(0,527);
	c2.fillStyle ="#53b286";
	c2.fill();
	
	var imageObj21=new Image();
	imageObj21.onload = function() {
			c2.drawImage(imageObj21,72,80,520,360);
      };
      imageObj21.src = 'images/feature1.png';
}
else{
	
    canvas2.height=window.innerWidth/2;
	var w2=canvas2.width-20;
    var h2=canvas2.height;
	var imageObj22=new Image();
	imageObj22.onload = function() {
			c2.drawImage(imageObj22, 10, 0,w2,w2/2);
      };
      imageObj22.src = 'images/feature1.png';
	
}

