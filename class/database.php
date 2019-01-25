<?php
    namespace db;
    class Database
    {
        public $_rn_conn;

        public function __construct()
        {
            $this ->_rn_conn = 
            mysqli_connect( 'localhost', 'root' , '' , 'todo');

            if ( $this ->_rn_conn)
            {
                echo "connected";
            }
        }
        
    }
    $conn = new Database;
    
?>