<?php
    require 'connexion.php';
        $sql = 'SELECT * FROM tasks';
     
    if($result = mysqli_query($conn, $sql)){
        if(mysqli_num_rows($result) > 0){
            echo '<table class="table">
                <tbody>';
                    while($row = mysqli_fetch_array($result))
                    {
                        echo '<tr>
                            <td>
                                <form method="post" action="index.php">
                                    <input type="checkbox" name="check" class="rn-checkbox" value="yes">
                                    </input>
                                </form>
                            </td>';
                            if(isset($_POST["check"]) === "yes")
                            {
                                echo ' checked="checked" ';
                            }
                        
                            echo '<td>' .$row["task"]. '</td>
                            <td>'. $row["val"] .'</td>';
                        echo '</tr>';
                        require "check.php";
                    }
                echo '</tbody>                            
            </table>';
        mysqli_free_result($result);
        } 
        else
        {
            echo '<p class="lead"><em>No records were found.</em></p>';
        }
    } else{
        echo 'ERROR: Could not able to execute $sql.' .mysqli_error($conn);
    }
    $conn->close(); 
?>