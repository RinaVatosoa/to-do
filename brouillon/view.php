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
                                    <input type="checkbox" name="check" class="rn-checkbox" value='; 
                                    echo $row["val"];
                                    echo '>
                                    </input>
                                </form>
                            </td>';
                            $checked = 0;
                            if (!empty($_POST['check'])) {
                                $checked = 1;
                            
                            mysqli_query($conn, "UPDATE tasks SET val = '1' WHERE id=?");
                            }

                            echo '<td class="task">' .$row["task"]. '</td>
                            <td> <div class="val">'. $row["val"] .'</div></td>';

                            require "check.php";
                        echo '</tr>';
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