$(function(){
  
  // Obtenemos el canvas
  var canvas1=document.getElementById("canvas1");
  var ctx1=canvas1.getContext("2d");

  // Obtenemos el canvas
  var canvas2=document.getElementById("canvas2");
  var ctx2=canvas2.getContext("2d");

  // Creamos una imagen
  var image = new Image();
  
  $("#convertir").click(function(){
    // Asignamos la misma altura y ancho de la imagen al canvas
    ctx1.canvas.height=image.height;
    ctx1.canvas.width=image.width;
    ctx2.canvas.height=image.height;
    ctx2.canvas.width=image.width;
    
    // Dibujamos la imagen en el canvas
    ctx1.drawImage(image,0,0);
    ctx2.drawImage(image,0,0);

    // Aplicamos la escala de grises
    var imgData1=ctx1.getImageData(0,0,canvas1.width,canvas1.height);
    var data1=imgData1.data;

    for(var i = 0; i < data1.length; i += 4) {
      var grayscale= data1[i]+data1[i+1]+data1[i+2]/3;
      data1[i]=grayscale;
      data1[i+1]=grayscale;
      data1[i+2]=grayscale;
    }

    // Asignamos la imagen al Canvas
    ctx1.putImageData(imgData1,0,0);

    // Aplicamos la escala de grises según el ojo humano
    var imgData2=ctx2.getImageData(0,0,canvas2.width,canvas2.height);
    var data2=imgData2.data;

    for(var i = 0; i < data2.length; i += 4) {
      var grayscale= 0.33*data2[i]+0.5*data2[i+1]+0.15*data2[i+2];
      data2[i]=grayscale;
      data2[i+1]=grayscale;
      data2[i+2]=grayscale;
    }

    // Asignamos la imagen al Canvas
    ctx2.putImageData(imgData2,0,0);

    // Mostramos los canvas y los textos
    $("#canvas1").fadeIn();
    $("#text1").fadeIn();
    $("#canvas2").fadeIn();
    $("#text2").fadeIn();
  });

  // Lectura de imagen OJO, esto puede dar error con imágenes protegidas
  image.crossOrigin = "anonymous";
  image.src = "https://farm6.staticflickr.com/5589/14820347476_a0d33c26d9_t.jpg";
});
