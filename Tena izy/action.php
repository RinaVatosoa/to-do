<?php
include 'database.php';
$object = new Database();

if( isset( $_POST["action"] ) )
{

    if($_POST["action"] == "Load")
    {
        echo $object->get_data_in_table("SELECT * FROM tasks ");
    }

    if( isset($_POST["action"]) == "Insert")
    {
        if ( isset( $_POST["task"]))
        {
            $task = mysqli_real_escape_string($object->connect, $_POST['task']);
        }

        if ( isset( $_POST["task"]) )
        {
            $query = "  
           INSERT INTO tasks  
           (task )   
           VALUES ('" .$task. "')
           ";
            $object->execute_query($query);
            echo 'Data Inserted';
        }

    }
}
?>
