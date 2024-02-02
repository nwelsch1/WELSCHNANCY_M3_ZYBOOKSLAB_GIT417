function drawTriangle(triangleSize) {
   let triangle = "";
   
   for(let i=0; i <triangleSize; i++) {
      if(i>0) {
         triangle += "\n";
      }
      let ast = "";
      for(let j = 0; j <= i ; j++) {
      ast+= "*";
      }
      triangle += ast;
   }
   console.log(asterisks);    
}

drawTriangle(4);