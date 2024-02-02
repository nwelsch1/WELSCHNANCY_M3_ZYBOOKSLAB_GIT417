function drawTriangle(triangleSize) {

   
   for(i=0; i <triangleSize; i++) {
      asterisks = "";
      for(j=0;j<=i;j++)
      asterisks = asterisks+"*";
   console.log(asterisks);
   }    
}
drawTriangle(4);