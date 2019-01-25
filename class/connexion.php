<?php
    $user = 'root';
    $pass = '';
    $db = 'todo';
    $conn = new mysqli('localhost' , $user , $pass , $db);
    /**
     * Check connection
    */
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
?>