function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255,10);

}

function draw() {
  background(0);

	
	rectMode(CENTER);
	var w=width
	var y=height	
	var p=115
	var o=300
	var c=20	
	var r=40
	
	var fc=frameCount


 	
fill(225,242,255,200)
	
	
	noStroke(0)	
	ellipse(w/2, y/8, r, r); 
  fill(0)
	ellipse(w/2+(fc/c)%p, y/8+(fc/c)%p, r, r); 
  ellipse(w/2+75-(fc/c)%p, y/8+75-(fc/c)%p, r, r); 
 //fill(30)
	
	for(var i=0;i<60;i++){
		
  stroke(255)
	strokeWeight(0.8)	
	noFill(0)
		
	ellipse(w/2+(fc/i)%o, y/8+(fc/i)%o, r, r);
	ellipse(w/2-(fc/i)%o, y/8-(fc/i)%o, r, r);	
		r*=0.5
		for(var j=0;j<10;j++){
			 stroke(255+(fc/i))
			strokeWeight(0.1)	
			ellipse(w/2, y/2-60+(fc/i), c-(fc/10), 50-(fc/10)); 
			 stroke(255)
			
      ellipse(w/2, y/2-30+(fc/j), c+(fc/10), 180-(fc/10));
			//ellipse(w/3, y/2+105, 5-(fc/i)%o*2, 5-(fc/i)%o*2); 
			c+=0.5
		}
	}
	

	
}