<?php
require 'config.php';

$title = isset($_POST['title']) ? trim($_POST['title']) : '';
$dueDate = isset($_POST['date']) ? trim($_POST['date']) : '';

file_put_contents('debug.txt', "title: $title, date: $dueDate\n", FILE_APPEND);

if ($title !== '' && $dueDate !== '') {
    $stmt = mysqli_prepare($db, "INSERT INTO tasks (title, dueDate) VALUES (?, ?)");
    mysqli_stmt_bind_param($stmt, "ss", $title, $dueDate);

    if (mysqli_stmt_execute($stmt)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => mysqli_error($db)]);
    }

    mysqli_stmt_close($stmt);
} else {
    echo json_encode(["success" => false, "error" => "Title and Date required"]);
}
?>
