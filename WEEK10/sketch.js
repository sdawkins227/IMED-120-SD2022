function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    background ('lavender')
    }


function draw() {
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


}
    

