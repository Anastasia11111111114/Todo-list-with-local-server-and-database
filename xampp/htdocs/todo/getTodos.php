<?php
require 'config.php';

// ⚠️ Обрати внимание: мы называем title как name,
// чтобы в JS совпадало с todoObject.name
$result = mysqli_query($db, "SELECT id, title AS name, dueDate FROM tasks");

$todos = mysqli_fetch_all($result, MYSQLI_ASSOC);

header('Content-Type: application/json');
echo json_encode($todos);
?>
