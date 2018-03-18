<?php
	$mysqli = mysqli_connect('localhost','root','2228','DB_COTIZACION') or die("no se pudo conectar" . mysql_error());
	if ($mysqli->connect_errno) {
		printf("Conexión fallida: %s", $mysqli->connect_error);
		exit();
	}
?>
