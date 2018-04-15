function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
    
$(document).ready(function(){
	$(".mybtn").click(function(){
	$("*").animate({scrollTop:0},2000);
	});
});   
//-------------end code scroll to top-------------