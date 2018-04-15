var canvas3=document.getElementById('myCanvas3');
var c3 = canvas3.getContext('2d');

    canvas3.width=window.innerWidth;
    canvas3.height=window.innerHeight;
if(canvas.width>768)
{
	canvas3.height=(window.innerHeight/2)+200;
    canvas3.width=window.innerWidth/2;
    console.log("canvas 3 width "+canvas3.width);
    console.log("canvas 3 height "+canvas3.height);
	c3.beginPath();
	c3.moveTo(canvas3.width,0);
	c3.lineTo(canvas3.width/3,canvas3.height/2);
	c3.lineTo(canvas3.width,canvas3.height);
	c3.fillStyle ="#53b286";
	c3.fill();

}
else{
    canvas3.height=window.innerWidth/2;
	var w3=canvas3.width-20;
    var h3=canvas3.height;
	var imageObj32=new Image();
	imageObj32.onload = function() {
			c3.drawImage(imageObj32, 10, 0,w3,w3/2);
      };
      imageObj32.src = 'images/feature2.png';
	
}
