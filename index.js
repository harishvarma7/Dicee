var x= Math.floor(Math.random()*6)+1;
var imagesrc = "images/dice"+x+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesrc);

var y= Math.floor(Math.random()*6)+1;
var imagesrc2 = "images/dice"+y+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imagesrc2);
