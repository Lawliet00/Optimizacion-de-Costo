<?php

	include 'conexion.php';
	$query = 'SELECT * FROM Admin';
	$resultado = $mysqli->query($query);
	$fila = mysqli_fetch_assoc($resultado);
	$campos_previos = $fila;
	mysqli_close($mysqli);
?>

<!DOCTYPE html>
 
<html lang="es">
 
<head>
<title>Titulo de la web</title>
<meta charset="utf-8" />
</head>
 
<body>
    <form name='form1' action="modif_parametros.php" method='POST'>
		 <table border='1px'>
		 	<input type="hidden" name="campos_previos" value='".$campos_previos."'>
			 <tr>
				 <td>
					 <p>Costo de estampado por Cm2 ---- $</p> <input type='text' name='Valor_estampado' value='<?php echo $fila['Valor_estampado'] ?>'><br>
				 </td>
			 </tr>

			 <tr> 
				<td>
					<p>Costo de bordado por Cm2 ---- $</p> <input type='text' name='Valor_bordado' value='<?php echo $fila['Valor_bordado'];?>'><br>
				</td>
			</tr>

			<tr>
				<td>
					<p>Tamaño minimo ---- Cm</p> <input type='text' name='Tam_min' value='<?php echo $fila['Tam_min'] ?>'><br>
				</td>
			</tr>

			<tr>
				<td>
					<p>Tamaño Maximo en hombro (alto) ----</p> <input type='text' name='Tam_max_hombro_Alto' value='<?php echo $fila['Tam_max_hombro_Alto'] ?>'><br>
				</td>
			</tr>

			<tr>
				<td>
					<p>Tamaño Maximo en hombro (ancho) ----</p> <input type='text'name='Tam_max_hombro_Ancho' value='<?php echo $fila['Tam_max_hombro_Ancho'] ?>'><br>
				</td>
			</tr>

			<tr>
				<td>
					<p>Tamaño Maximo (Frente y espalda) ----</p> <input type='text' name='Tam_max_Alto' value='<?php echo $fila['Tam_max_Alto'] ?>'><br>
				</td>
			</tr>

			<tr>
				<td>
					<p>Tamaño Maximo (Frente y espalda) ----</p> <input type='text' name='Tam_max_Ancho' value='<?php echo $fila['Tam_max_Ancho'] ?>'><br>
				</td>
			</tr>
			<tr>
	  			<td>
	  				<button type="submit">Actualizar</button>
			  	</td>
			</tr>
		</table>
	</form>
	
	<br>
	<br>
</body>
</html>




















		