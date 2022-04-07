var osc; 

function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    background ('lavender') 
    osc = new p5.Oscillator('sine');
    osc.freq(0);
    osc.amp(1000);
    osc.start();
}
function draw() {
//PIANO   
    //white keys
    for(let w=0; w<14; w++){
        fill('white');
        rect(100+55*w, 30, 55, 400,0,0,15,15);
    }
    //2 sets of black keys
    for(let z=0; z<2; z++){   
        fill('black');
        rect(140+z*45, 30, 35, 215, 0, 0, 5, 5);
        rect(525+z*45, 30, 35, 215, 0, 0, 5, 5);
    }
    
    //3 sets of black keys
    for(let i=0; i<3; i++){
        fill('black');
        rect(310+i*50, 30, 35, 215, 0, 0, 5, 5);
        rect(690+i*50, 30, 35, 215, 0, 0, 5, 5);
    }
    
    if((mouseX > 100 & mouseX < 155 & mouseY > 30 &  mouseY < 430 & mouseIsPressed) || keyIsDown(65)  ){
        osc.start();
        osc.freq(130.8128);
        osc.amp(1000, 0.05);
        }
    if((mouseX > 140 & mouseX < 220 & mouseY > 30 & mouseY < 245 & mouseIsPressed) || keyIsDown(65)   ){
        osc.start();
        osc.freq(300);
        osc.amp(1000, 0.05);
        }
    if((mouseX > 525 & mouseX < 700 & mouseY > 30 & mouseY < 245 & mouseIsPressed) || keyIsDown(65)  ){
        osc.start();
        osc.freq(450);
        osc.amp(1000, 0.05);
    }
}
function keyTyped(){
    osc.start();
    if(keyCode === 'A'){
        
        osc.freq(450);
        osc.amp(1000, 0.05);
    }
    if(keyCode === 'S'){
       
        osc.freq(130);
        osc.amp(1000, 0.05);
    }
    if(keyCode === 'D'){
       
        osc.freq(150);
        osc.amp(1000, 0.05);
    }
    if(keyCode === 'F'){
       
        osc.freq(170);
        osc.amp(1000, 0.05);
    }
    if(keyCode === 'G'){
    
        osc.freq(330);
        osc.amp(1000, 0.05);
    }
    if(keyCode === 'H'){
     
        osc.freq(450);
        osc.amp(1000, 0.05);
    }
    if(keyCode === 'J'){
     
        osc.freq(560);
        osc.amp(1000, 0.05);
    }
    if(keyCode === 'K'){
       
        osc.freq(120);
        osc.amp(1000, 0.05);
    }
    if(keyCode === 'L'){
   
        osc.freq(410);
        osc.amp(1000, 0.05);
    }
}