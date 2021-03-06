
// precio del costo de estampado y bordado por cm2
var Precio_estampado_xCm2 = 0;
var Precio_bordado_xCm2 = 0;

//tamaño minimo de estampado o bordado
var Tam_min = 0;

// centimetros maximos permitidos para el bordado o estampado en la zona del hombro
var Tam_max_hombro_Alto = 0;
var Tam_max_hombro_Ancho = 0;

// centimetros maximos permitidos para el bordado o estampado en la zona del frente y espalda
var Tam_max_Alto = 0;
var Tam_max_Ancho = 0;

function Valores_predetermindados(){

  var _POST = document.getElementsByName("POST");
  // precio del costo de estampado y bordado por cm2
  Precio_estampado_xCm2 = _POST[0].value;
  Precio_bordado_xCm2 = _POST[1].value;

  //tamaño minimo de estampado o bordado
  Tam_min = _POST[2].value;

  // centimetros maximos permitidos para el bordado o estampado en la zona del hombro
  Tam_max_hombro_Alto = _POST[3].value;
  Tam_max_hombro_Ancho = _POST[4].value;

  // centimetros maximos permitidos para el bordado o estampado en la zona del frente y espalda
  Tam_max_Alto = _POST[5].value;
  Tam_max_Ancho = _POST[6].value;
};

// funcion encargada de obtener la informacion del formulario y mostrar los resultados
function Cotizar(){

  var Costo_total = 0;

  var camiseta = document.getElementById("camiseta").value;
  if (valida_camiseta(camiseta) == false) {
      alert("No elegio ninguna talla de camiseta");
      return;
  }
  else{
      Costo_total += valida_camiseta(camiseta);
  }

  for (var i = 0; i < 4; i++) {
      var total = 0;
      var acabado1 = document.getElementById("estampado"+String(i));
      var acabado2 = document.getElementById("bordado"+String(i));
      var alto = document.getElementById("alto"+String(i)).value;
      var ancho = document.getElementById("ancho"+String(i)).value;
      var total_field = document.getElementById("total"+String(i));
    
      if (acabado1.checked) {
        total = Estampados(alto,ancho,i+1);
      }
      else if(acabado2.checked){

        total = Bordados(alto,ancho,i+1);
      }
      total_field.value = total.toFixed(2);
      Costo_total += total;
  }
  var total_field = document.getElementById("total4");
  total_field.value = parseFloat(Costo_total).toFixed(2);  
};


// funcion que obtiene el costo de la camiseta
function valida_camiseta(camiseta){
  if (camiseta[0] === "-"){
    return 0;
  }
  return parseInt(camiseta());
};

// funcion que evalua si las medidas ingresadas por el usuario son validas
// para una cierta zona
function valida_medidas(alto,ancho,alto_M,ancho_M){
  if ((alto >= 5 && alto <= alto_M) && (ancho >= 5 && ancho <= alto_M)) {
    return true;
  }
  return false;
};

/////////////////////////////////////////////////////////
/////////////////    ESTAMPADO     //////////////////////
/////////////////////////////////////////////////////////

// un menu en el cual se determina que zona eligio el usuario, en caso de ser Estampado
// y decide que funcion llamar
function Estampados(alto,ancho,pos_zona){
  if (pos_zona == 1 || pos_zona == 2) {
      return Estampado_Hombros(alto,ancho);
  }
  else if (pos_zona == 3 || pos_zona == 4) {
      return Estampado_Maximo(alto,ancho);
  }
};

// se evalua la zona que se eligio hombro(derecho o izquierdo) y se le calcula el precio
function Estampado_Hombros(alto,ancho){
  if (valida_medidas(alto,ancho,Tam_max_hombro_Alto,Tam_max_hombro_Ancho)) {
      return (alto*Precio_estampado_xCm2*ancho);
  }
  return 0;
};

// se evalua la zona que se eligio(frente o espalda) y se le calcula el precio
function Estampado_Maximo(alto, ancho){

  if (valida_medidas(alto,ancho,Tam_max_Alto,Tam_max_Ancho)) {
      return (alto*Precio_estampado_xCm2*ancho);
  }
  return 0;
};


///////////////////////////////////////////////////////
///////////////////      BORDADO   ////////////////////
///////////////////////////////////////////////////////

// un menu en el cual se determina que zona eligio el usuario, en caso de ser Bordado
// y decide que funcion llamar
function Bordados(alto,ancho,pos_zona){
  if (pos_zona == 1 || pos_zona == 2) {
    return Bordado_Hombros(alto,ancho);
  }
  else if (pos_zona == 3 || pos_zona == 4) {
    return Bordado_Maximo(alto,ancho);
  }
};

// se evalua la zona que se eligio hombro(derecho o izquierdo) y se le calcula el precio
function Bordado_Hombros(alto,ancho){
  if (valida_medidas(alto,ancho,Tam_max_hombro_Alto,Tam_max_hombro_Ancho)) {
    return (alto*Precio_bordado_xCm2*ancho);
  }
  return 0;
};

// se evalua la zona que se eligio(frente o espalda) y se le calcula el precio
function Bordado_Maximo(alto, ancho){
  if (valida_medidas(alto,ancho,Tam_max_Alto,Tam_max_Ancho)) {
    return (alto*Precio_bordado_xCm2*ancho);
  }
  return 0;
};
