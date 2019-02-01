<?php
include 'insert.php';
$object = new InsertTask();
if(isset($_POST["action"]))
{
    if($_POST["action"] == "Load")
    {
        echo $object->get_data_in_table("SELECT * FROM tasks ");
    }
    if($_POST["action"] == "Insert")
    {
        $task = mysqli_real_escape_string($object->connect, $_POST["task"]);
        $check = mysqli_real_escape_string($object->connect, $_POST["check"]);
        $query = "  
           INSERT INTO tasks  
           (task, val )   
           VALUES ('".$task."', '".$check."')  
           ";
        $object->execute_query($query);
        echo 'Data Inserted';
    }
}
?>
