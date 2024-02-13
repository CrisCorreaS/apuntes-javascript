<?php
// SI se pone POST habría que utilizar $.ajax con POST o $.POST
// SI se pone GET habría que utilizar $.ajax con GET o $.GET

$resultado = "Bienvenido, " . $_REQUEST['nombre'] . " " . $_REQUEST['apellido'];
echo $resultado;
?>