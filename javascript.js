
$(function(){

  var Costo_total = [0,0,0,0,0,0]; //[sueter, h_derecho, h_izquierdo, pecho, espalda]

  var Precio_estampado_xCm2 = 0.50;
  var Precio_bordado_xCm2 = 0.70;

  var Tam_max_hombro_Alto = 8;
  var Tam_max_hombro_Ancho = 7;

  var Tam_max_Alto = 35;
  var Tam_max_Ancho = 30;

  $("#calcular_total").click(function(){
    var total = 0;
    for (var i = 0; i < Costo_total.length; i++) {
      total += Costo_total[i];
    }
    console.log("precio total: "+ total);
  });

  $("#cotizar").click(function(){

    for (var i = 0; i < 4; i++) {
      var total = 0;
      var acabado = document.getElementsByName("acabado"+String(i));
      var alto = document.getElementById("alto"+String(i)).value;
      var ancho = document.getElementById("ancho"+String(i)).value;
      var total_field = document.getElementById("total"+String(i));

      if (acabado[0].checked) {
        total = Estampados(alto,ancho,i+1);
        console.log(Estampados(alto,ancho,i+1));
      }
      else if(acabado[1].checked){
        total = Bordados(alto,ancho,i+1);
        console.log(Bordados(alto,ancho,i+1));
      }
      Costo_total[i+1] = total;
      total_field.value = total;
      Costo_total[5] += total;
    }
      var total_field = document.getElementById("total4");
      total_field.value = Costo_total[5];
  });


  function valida_medidas(alto,ancho,alto_M,ancho_M){
    if ((alto >= 5 && alto <= alto_M) && (ancho >= 5 && ancho <= alto_M)) {
      return true;
    }
    return false;
  };

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

  function Estampados(alto,ancho,pos_zona){
    if (pos_zona == 1) {
        Costo_total[pos_zona] = Estampado_Hombros(alto,ancho,"h_derecho");
    }
    else if (pos_zona == 2) {
        Costo_total[pos_zona] = Estampado_Hombros(alto,ancho,"h_izquierdo");
    }
    else if (pos_zona == 3) {
        Costo_total[pos_zona] = Estampado_Maximo(alto,ancho,"pecho");
    }
    else if (pos_zona == 4) {
        Costo_total[pos_zona] = Estampado_Maximo(alto,ancho,"espalda");
    }
    return Costo_total[pos_zona];
  };

  function Estampado_Hombros(alto,ancho, hombro){
    if (valida_medidas(alto,ancho,Tam_max_hombro_Alto,Tam_max_hombro_Ancho)) {

      if (hombro == "h_derecho") {
        return (alto*Precio_estampado_xCm2*ancho);
      }
      else{
        return (alto*Precio_estampado_xCm2*ancho);
      }
    }
    alert("tamaño no valido para mangas");
    return 0;
  };

  function Estampado_Maximo(alto, ancho, parte){

    if (valida_medidas(alto,ancho,Tam_max_Alto,Tam_max_Ancho)) {
      if (parte == "pecho") {
        console.log("pecho");
        return (alto*Precio_estampado_xCm2*ancho);
      }
      else{
        console.log("espalda");
        return (alto*Precio_estampado_xCm2*ancho);
      }
    }
    alert("tamaño no valido para pecho o espalda");
    return 0;
  };







///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

  function Bordados(alto,ancho,pos_zona){
    if (pos_zona == 1) {
        Costo_total[pos_zona] = Bordado_Hombros(alto,ancho,"h_derecho");
    }
    else if (pos_zona == 2) {
        Costo_total[pos_zona] = Bordado_Hombros(alto,ancho,"h_izquierdo");
    }
    else if (pos_zona == 3) {
        Costo_total[pos_zona] = Bordado_Maximo(alto,ancho,"pecho");
    }
    else if (pos_zona == 4) {
        Costo_total[pos_zona] = Bordado_Maximo(alto,ancho,"espalda");
    }
    return Costo_total[pos_zona];
  };

  function Bordado_Hombros(alto,ancho, hombro){
    if (valida_medidas(alto,ancho,Tam_max_hombro_Alto,Tam_max_hombro_Ancho)) {
      if (hombro == "h_derecho") {
        return (alto*Precio_bordado_xCm2*ancho);
      }
      else{
        return (alto*Precio_bordado_xCm2*ancho);
      }
    }
    return 0;
  };

  function Bordado_Maximo(alto, ancho, parte){
    if (valida_medidas(alto,ancho,Tam_max_Alto,Tam_max_Ancho)) {
      if (parte == "pecho") {
        return (alto*Precio_bordado_xCm2*ancho);
      }
      else{
        return (alto*Precio_bordado_xCm2*ancho);
      }
    }
    return 0;
  };
});
