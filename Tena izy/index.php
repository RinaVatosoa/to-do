<?php
 include 'insert.php';  
 $object = new InsertTask();  
 ?>  
 <html>  
      <head>  
        <title>PHP POO to-do</title>  
        <link rel="stylesheet" type="text/css" href="../bootstrap-4.2.1-dist/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="../css/style.css" />
      </head>  
      <body>  
           <div class="container box">  
                <h3 align="center">PHP POO to-do</h3><br /> 
                <div class="row">
                    <div class="col-4">
                        <ul class="list-group">
                            <li class="list-group-item">Ma journée</li>
                            <li class="list-group-item">Important</li>
                            <li class="list-group-item">Planifié</li>
                            <li class="list-group-item">Tâches</li>
                        </ul>
                    </div> 
                    <div class="col-8">
                        <button type="button" name="add" class="btn btn-success" data-toggle="collapse" 
                            data-target="#todo-collapse">Add task
                        </button><br /><br />
                        <div id="todo-collapse" class="collapse col-12">  
                            <form method="post" id="todo-form">  
                            <div class="row">
                                <input type="text" name="task" id="task" class="form control col-8 rn-task-input" />
                                <input type="hidden" name="action" id="action col-2"/>
                                <input type="submit" name="button_action" id="button_action submit"
                                    class="btn btn-secondary " value="Insert" />
                            </div>
                            </form>  
                        </div>  
                        <br /> 
                        <div id="task-table" class="table-responsive">  
                        </div> 
                    </div>
                </div>     
           </div>

            <script type="text/javascript" src="../js/jquery-v3x.js"></script>
            <script type="text/javascript" src="../bootstrap-4.2.1-dist/js/bootstrap.min.js"></script>
            <script type="text/javascript" src="../js/form.js"></script>
           <script type="text/javascript" src="../js/check.js"></script>

      </body>
 </html>