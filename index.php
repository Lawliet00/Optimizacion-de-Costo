<!DOCTYPE html>
<html lang='es'>

<head>
	<meta charset='UTF-8'>
	<script type='text/javascript' src='javascript.js'></script>
</head>

<?php

	include "conexion.php";
	$query = "SELECT * FROM Admin";

	$resultado = $mysqli->query($query);
	while ($fila = mysqli_fetch_assoc($resultado)) {
			echo "<input type='hidden' value='".$fila['Valor_estampado']."' name='POST'>
			<input type='hidden' value='".$fila['Valor_bordado']."' name='POST'>
			<input type='hidden' value='".$fila['Tam_min']."' name='POST'>
			<input type='hidden' value='".$fila['Tam_max_hombro_Alto']."' name='POST'>
			<input type='hidden' value='".$fila['Tam_max_hombro_Ancho']."' name='POST'>
			<input type='hidden' value='".$fila['Tam_max_Alto']."' name='POST'>
			<input type='hidden' value='".$fila['Tam_max_Ancho']."' name='POST'>";
	}	
?>

<body onload='Valores_predetermindados();' >
	<form name='form1' method='POST'>
		<label>Elegir tipo de camiseta </label>
		<select name='Talla' id='camiseta'>
			<option disabled selected>-- Talla de Camiseta</option>
			<option value='10'>talla S - 10$</option>
			<option value='13'>talla M - 13$</option>
			<option value='15'>talla L - 15$</option>
		</select>
	  <table border='1px'>
		<tr >
	  		<th >Estampado</th>
	  		<th> Bordado </th>
	  		<th> Posicion </th>
	  		<th>Ancho</th>
	  		<th>Alto</th>
	  		<th>Total</th>
		</tr>
		<tr>
			<td >
			  <input type='radio' value='Estampado' name="acabado0" id='estampado0' ></td> 
			  <td>  <input type='radio'  value='Bordado' name="acabado0" id='bordado0'>
			</td>
			<td>
			Hombro Derecho
			</td>
			<td>
			  <input type='number' name="alto0" id='alto0'>
			</td>
			<td>
			  <input type='number'  name="ancho0" id='ancho0' >
			</td>
			<td> 
			  <input type='text' name="total0" id='total0' readonly='1'>
			</td>
		</tr>
		<tr>
			<td >
			  <input type='radio' value='Estampado' name="acabado1" id='estampado1' ></td> <td>  <input type='radio'  value='Bordado' name="acabado1" id='bordado1'>
			</td>
			<td>
			Hombro Izquierdo 
			</td>
			<td>
			  <input type='number' type="" name="alto1" id='alto1' ></td>
			  <td>
			  <input type='number'  name="ancho1" id='ancho1' >
			</td>
			<td> 
			  <input type='text' name="total1" id='total1' readonly='1'>
			</td>
		</tr>
		<tr>
			<td >
			  <input type='radio' value='Estampado' name="acabado2" id='estampado2' ></td> <td>  <input type='radio'  value='Bordado' name="acabado2" id='bordado2'>
			</td>
			<td>
			Frente
			</td>
			<td>
			  <input type='number' name="alto2" id='alto2' ></td>
			<td>
			  <input type='number'  name="ancho2" id='ancho2' ></td>
			<td>
			  <input type='text' name="total2" id='total2' readonly='1'>
			</td>
		</tr>
			<tr>
			<td >
			  <input type='radio' value='Estampado' name="acabado3" id='estampado3' ></td> <td>  <input type='radio'  value='Bordado' name="acabado3" id='bordado3'>
			</td>
			<td>
			Espalda
			</td>
			<td>
			  <input type='number' name="alto3" id='alto3' >
			</td>
			<td>
			  <input type='number'  name="ancho3" id='ancho3' >
			</td>
			<td>
			  <input type='text' name="total3" id='total3' readonly='1'>
			</td>
		</tr>
		<tr>
			<td colspan='5'>Total General</td>
			<td>
			  <input type='text' name='total4' id='total4' readonly='1'>
			</td>
		<tr>
	  </table>
	  <tr>
	  	<td>
	  		<a href='actualizar.php'><button type="button">Cambiar Parametos</button></a>
	  	</td>
	  </tr>

	  <button name="btnGuardar" value="btn" type="submit">Guardar</button>
	</form>
	<button id='cotizar' onclick='Cotizar();'>Calcular cotización</button>

</body>

<?php 
	if (isset($_POST['btnGuardar'])) {
		if ($_POST['total4'] == 0.0 or $_POST['total4'] == '') {
			echo "No se puede Guardar";
		}
		else{
			include 'list_cotizaciones.php';
		}
	}
?>


</html>
