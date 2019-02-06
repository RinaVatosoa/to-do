<?php  
 class InsertTask  
 {  
     public $connect;  
     private $host = "localhost";  
     private $username = 'root';  
     private $password = '';  
     private $database = 'todo';  
     function __construct()  
     {  
          $this->database_connect();  
     }  
     public function database_connect()  
     {  
          $this->connect = mysqli_connect
               ($this->host, $this->username, $this->password, $this->database);  
     }  
     public function execute_query($query)  
     {  
          return mysqli_query($this->connect, $query);  
     }

     public function get_data_in_table($query)  
     {
         $output = '';
         $result = $this->execute_query($query);

         $output .= '  
            <script src="../js/check.js"></script>
           <table class="table table-bordered table-striped">  
                <tr>  
                     
                     <th width="35%">Checking</th>  
                     <th width="35%">id</th>  
                    <th width="35%">Tasks</th>  
                    <th width="10%">Did?</th>
                </tr>  
           ';

         while($row = mysqli_fetch_object($result))
         {
             $status = $row->val;
             $converted_res = ($status) ? 'Fait' : 'Non fait';

             $output .= '  
                <tr>     
                    <td>
                        <form method="post" action="index.php">
                            <input type="checkbox" name="check" class="rn-checkbox" value="">
                        </form>
                    </td>  
                    <td class="id">'.$row->id.'</td>  
                    <td class="task">' .$row->task.'</td>  
                    <td class="val">'.$converted_res.'</td>
                </tr>  
                ';
         }
         $output .= '</table>';
         return $output;
     }       
}

?>
