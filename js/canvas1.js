

$(window).on('resize',function(){location.reload();});
var canvas=document.getElementById('myCanvas');
var c = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var comp_screen=window.innerHeight+150;
if(canvas.width>=768 && comp_screen>=768 && comp_screen<1000)
{
canvas.height=comp_screen-100;
w=canvas.width;
c.beginPath();
c.moveTo(0,0);
c.lineTo(w,0);
c.lineTo(w,300);
c.lineTo(0,500);
c.lineTo(0,380);
c.fillStyle ="#53b286";
c.fill();

}

else if(canvas.width>768 && canvas.height<769 )
        {
            canvas.height=window.innerHeight/1.3;
            w=canvas.width;
            c.beginPath();
            c.moveTo(0,0);
            c.lineTo(w,0);
            c.lineTo(w,300);
            c.lineTo(0,500);
            c.lineTo(0,380);
            c.fillStyle ="#53b286";
            c.fill();
        }
//for ipad
else if(canvas.width>=768 && comp_screen>1000)
        {
            canvas.height=window.innerHeight/1.7;
            w=canvas.width;
            h=canvas.height;
            console.log(w);//1366
            c.beginPath();
            c.moveTo(0,0);
            c.lineTo(w,0);
            c.lineTo(w,h/2.3);
            c.lineTo(0,h/1.3);
            c.lineTo(0,h);
            c.fillStyle ="#53b286";
            c.fill();      
        }

//for small device
else{
            canvas.height=window.innerHeight/2;
            w=canvas.width;
            console.log("final feature width : "+w);//1366
            c.beginPath();
            c.moveTo(0,0);
            c.lineTo(w,0);
            c.lineTo(w,(w/2));
            c.lineTo(0,(w/1.5));
            c.lineTo(0,w/1.5);
            c.fillStyle ="#53b286";
            c.fill();
        }




         

