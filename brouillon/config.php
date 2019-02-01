<?php
  
    $db = mysqli_connect( 'localhost', 'root', '', 'todo');

    if (isset($_POST['task'])){
        $task = $_POST['task'];
        $checked = 0; // non cochée par défaut

       mysqli_query($db, "INSERT INTO tasks (task, val) VALUES('$task', '$checked')");
       header('location: form.php');
    }

?>