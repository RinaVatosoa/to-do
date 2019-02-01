<?php

    require_once "connexion.php";
    if (isset($_POST['search'])){
        $search = $_POST['search'];
    }
    $output = '';

    $sql = "SELECT * FROM tasks WHERE id LIKE '%$search%'"; 
    
    $result = mysqli_query( $conn, $sql);
    if(mysqli_num_rows( $result ) > 0 )
    {
        $output = '<h4 align="center">Search result</h4>';
        $output = "<div class='table-responsive'>
                        <table>
                            <tr>
                                <td>task</td>
                                <td>value</td>
                            </tr>";

            while( $row = mysqli_fetch_array( $result ))
            {
                $output = "
                        <tr>
                            <td>".$row['task']."</td>
                            <td>".$row['val']."</td>
                        </tr>
                    </table>
                </div>";
            }    
                
            echo $output;    
                        
    }else
    {
        echo "Données non-trouvés";
    } 
        
?>