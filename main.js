canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

rover_x=10;
rover_y=10;

background_image="mars.jpg";
rover_image="rover.png";
function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadbackground;
    background_imagetag.src=background_image;
    console.log("hi");
    rover_imagetag=new Image();
    rover_imagetag.onload=uploadrover;
    rover_imagetag.src=rover_image;
    console.log("hello");
}
function uploadbackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,100,90);
    console.log("Lets Play free fire");
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
}
    function up(){
    if(rover_y>=0)
    {
    rover_y=rover_y-10;
    console.log("when w is pressed, x = "+rover_x+" and y = "+rover_y);
    uploadbackground();
    uploadrover();

    }
}
function down(){
    if(rover_y<=550)
    {
    rover_y=rover_y+10;
    console.log("when s is pressed, x = "+rover_x+" and y = "+rover_y);
    uploadbackground();
    uploadrover();

    }
}
function right(){
    if(rover_x<=750)
    {
    rover_x=rover_x+10;
    console.log("when d is pressed, x = "+rover_x+" and y = "+rover_y);
    uploadbackground();
    uploadrover();

    }
}
    function left(){
    if(rover_x>=0)
    {
    rover_x=rover_x-10;
    console.log("when a is pressed, x = "+rover_x+" and y = "+rover_y);
    uploadbackground();
    uploadrover();

    }
}