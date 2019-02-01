<?php
    include 'action.php';
    $fields = new DataOperation;
    if (isset($_POST['submit']))
    {
        $myArray = array(
          'task' => mysqli_real_escape_string( $fields ->_rn_conn, $_POST['task'])
        );
            echo $fields ->insert_record ( "tasks" , $myArray);
        if ( $fields ->insert_record('tasks',$myArray))
        {
           header("location: index.php");
        }
        
    }
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Form to-do list</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="../bootstrap-4.2.1-dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../fontawesome-free-5.6.3-web/css/all.css"/>
    <link rel="stylesheet" type="../text/css" media="screen" href="css/style.css" />
</head>
<body>
    <div>
        <nav class="navbar navbar-light bg-light">
            <div class="col-4 text-center">
                <a class="navbar-brand" href="#">
                    To-Do
                </a>
            </div>

            <div class="col-6">
                <form class="form-inline my-4 my-lg-0 rn-search-input">
                    <input class="form-control mr-sm-4" type="search" placeholder="Search" 
                        aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>

    <div class="row">
        <div class="col-4">
            <ul class="list-group">
                <li class="list-group-item">Ma journée</li>
                <li class="list-group-item">Important</li>
                <li class="list-group-item">Planifié</li>
                <li class="list-group-item">Tâches</li>
            </ul>
        </div>
        <div class="col-7">
            <form method="POST" action="index.php">
                <input type="text" name="task" class="rn-task-input col-10">
                <button type="submit" name="submit" class="btn btn-secondary rn-btn">Add task</button>
            </form>
          
            <table class="table">
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Tasks</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><i class="fa fa-check-circle-o" aria-hidden="true"></i></td>
                        <td class="rn-task"> tFirst</td>
                        <td class="rn-delete">
                            <a href="#">x</a>
                        </td>
                    </tr>
                    <tr>
                        <?php
                            require_once "view.php";
                        ?>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

        <!--liens javascript-->
        <script type="text/javascript" src="../js/jquery-v3x.js"></script>
        <script type="text/javascript" src="../bootstrap-4.2.1-dist/js/bootstrap.min.js"></script>

        <script type="text/javascript" src="../fontawesome-free-5.6.3-web/js/fontawesome.min.js"></script>
        <script type="text/javascript" src="../js/script.js"></script>
</body>
</html>