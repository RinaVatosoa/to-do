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

    print_r( $_POST);

    $newValue = mysqli_real_escape_string($conn, $_POST['val']);

    if(isset($_POST["val"])) {
        $sql = "UPDATE tasks SET val='$newValue' WHERE id='2'";
        if($conn->query($sql) === TRUE){
            echo "Success";
        } else {
            echo "error" . $sql . "<br>".$conn->error;
        }
    }
?>
