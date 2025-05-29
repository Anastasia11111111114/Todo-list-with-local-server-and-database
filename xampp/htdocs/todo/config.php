<?php
$db = mysqli_connect("localhost", "root", "", "todo");

if (!$db) {
    die("Ошибка подключения: " . mysqli_connect_error());
}
?>
