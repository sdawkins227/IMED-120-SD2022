function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    background ('lavender')
    //sayHello(myname);

    input = createInput();
    input.position(20,65);

    textSize(36);
    text('Type the number you want to calculate for tips.', 20, 40);

    button = createButton('15% Tips');
    button.position(input.x + input.width + 5, 65);
    button.mousePressed(function(){tipCalculator(0.15);})
    
    
    button = createButton('20% Tips');
    button.position(input.x + input.width + 90, 65);
    button.mousePressed(function(){tipCalculator(0.20);})
    
    
    button = createButton('25% Tips');
    button.position(input.x + input.width + 175, 65);
    button.mousePressed(function(){tipCalculator(0.25);})
}


function tipCalculator(percent){
    text('For ' + percent + ' you need to pay $' + input.value()*percent + ' for tips',  20, 1000*percent);
}
