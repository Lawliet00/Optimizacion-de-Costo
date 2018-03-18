<?php
## Estos valores para comparar se extraeran de una base de datos	
include 'conexion.php';

if ($_POST['Talla'] == 'talla S - 10$') {
	$Talla = 'S';
	$Precio_camisa = 10;
}elseif ($_POST['Talla'] == 'talla M - 13$') {
	$Talla = 'M';
	$Precio_camisa = 13;
}elseif ($_POST['Talla'] == 'talla L - 15$') {
	$Talla = 'L';
	$Precio_camisa = 15;
}

for ($i=0; $i < 4; $i++) { 
	if ($i == 0) {	$Zona = 'Hombro_Derecho';}
	elseif ($i == 1) {	$Zona = 'Hombro_Izquierdo';}
	elseif ($i == 2) {	$Zona = 'Frente';}
	elseif ($i == 3) {	$Zona = 'Espalda'; }

	$tipo_trabajo1 = $_POST['estampado'.$i];
	$tipo_trabajo2 = $_POST['bordado'.$i];
	$alto     = $_POST['alto'.$i];
	$ancho = $_POST['ancho'.$i];
	$Costo = $_POST['total'.$i];

	if ($tipo_trabajo1 != '' xor $tipo_trabajo2 != '') {
		if ($tipo_trabajo1 != '') {
			$tipo_trabajo =$tipo_trabajo1;
		}
		else{
			$tipo_trabajo =$tipo_trabajo2;	
		}

		$Medidas = $alto."x".$ancho;
		$Total = $Costo + $Precio_camisa; 

		$resultado = $mysqli->query("INSERT INTO Registros (Talla,
				 Precio_camisa,
				 Zona,
				 tipo_trabajo,
				 Medidas,
				 Costo,
				 Total) VALUES ('$Talla','$Precio_camisa','$Zona','$tipo_trabajo','$Medidas','$Costo','$Total')")or die('Error al agregar registro');
		if ($resultado) {
			echo "actualización correcta";
			header('refresh:1 url= index.php');
		}else{
			echo "ocurrio un error";
			header('refresh:1 url= index.php');
		}
	}

}
mysqli_close($mysqli);

?>
