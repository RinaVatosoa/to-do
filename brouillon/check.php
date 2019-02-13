<?php
require_once "connexion.php";

if (!empty($_POST['check']))
{
    $result=$_POST['check'];
    echo $result;
}
?>