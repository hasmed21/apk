<!DOCTYPE html>
<html>
<head>
	<title>Tabla de registros / resultados</title>
</head>
<body>
	<?php
		/*session_start();

		if ($_SESSION['query']) {
			echo "alert('Si existe')";
		}else{
			echo "Pues valio, que no ve?";
		}*/
		$con = mysqli_connect("localhost","u211165430_jesse","201600054","u211165430_appmo");
		$consu = mysqli_query($con, "SELECT `nombre`,`apellidos`, `aciertos` FROM `usua` ORDER BY apellidos");
	?>
	<table width="500" border="1" bgcolor="#7C89DA" style="padding: 2px; margin: 5px; border:1px solid black; border-radius: 20px; ">
		<tr>
			<td>Nombres</td>
			<td>Apellidos</td>
			<td>Puntaje</td>
		</tr>
		
		<?php
			while ($re = mysqli_fetch_array($consu)) {
			$nom = $re['nombre'];
			$ape = $re['apellidos'];
			$pun = $re['aciertos'];
		?>
		<tr align="center">
			<td><?php print($nom); ?></td>
			<td><?php print($ape); ?></td>
			<td><?php print($pun); ?></td>
		</tr>
		<?php } ?>
	</table>

</body>
</html>