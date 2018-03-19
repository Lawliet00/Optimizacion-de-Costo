<?php
	$mysqli = mysqli_connect('localhost','id5100874_admin','25916407','id5100874_db_cot') or die("no se pudo conectar");
	if ($mysqli->connect_errno) {
		printf("Conexión fallida: %s", $mysqli->connect_error);
		exit();
	}
?>