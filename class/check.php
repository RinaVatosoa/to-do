<?php
require_once "connexion.php";
//$checked = ($_POST['check'] == ' checked');
$checked = 0;
if (!empty($_POST['check'])) {
    $checked = 1;

mysqli_query($db, "UPDATE tasks SET val = $checked WHERE tasks.id=?");
}
?>