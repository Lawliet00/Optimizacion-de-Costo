<?php
	
	modificarParametros($_POST['Valor_estampado'],$_POST['Valor_bordado'],$_POST['Tam_min'],
		$_POST['Tam_max_hombro_Alto'],$_POST['Tam_max_hombro_Ancho'],$_POST['Tam_max_Alto'],
		$_POST['Tam_max_Ancho']);

	function modificarParametros($v_estampado, $v_bordado, $t_min, $max_hombro_alto, $max_hombro_ancho, $t_max_alto, $t_max_ancho){
		include 'conexion.php';

		$query = "UPDATE Admin SET
			Valor_estampado = '".$v_estampado."',
			Valor_bordado = '".$v_bordado."',
			Tam_min = '".$t_min."',
			Tam_max_hombro_Alto = '".$max_hombro_alto."',
			Tam_max_hombro_Ancho = '".$max_hombro_ancho."',
			Tam_max_Alto = '".$t_max_alto."',
			Tam_max_Ancho = '".$t_max_ancho."'
			";

		$resultado = $mysqli -> query($query) || die("No se pudo realizar la actualización");

	}
?>

<script type='text/javascript'>
    alert('Informacion actualizada Correctamente');
    window.location.href='index.php';
</script>