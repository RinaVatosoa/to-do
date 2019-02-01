<?php
//use db\Database;
class DataOperation extends Database
//class DataOperation
{
    public $_rn_conn;
    public $sql;
    public $table;
    public $fields;

    public function __construct()
    {
        $this ->_rn_conn = 
        mysqli_connect( "localhost", "root" , "" , "todo");

        if ( $this ->_rn_conn)
        {
            echo "connected";
        }
    }
    
    public function insert_record( $table, $fields = array())
    {
        /**
        *INSERT INTO tasks('task', 'val') VALUES ($task);
        */
        
        $sql = "INSERT INTO" .$table ." (";
        $sql .= implode(",", array_keys($fields)) . ') VALUES (';
        $sql .= "'" . implode("','", array_values($fields)). "')";
        
        /*$query = mysqli_query ( $this ->_rn_conn, 
        "INSERT INTO tasks( task ) VALUES( :task )");*/
        
        /**
         *$query = mysqli_query( $this ->_rn_conn, $sql);
        */

        if (mysqli_query( $this ->_rn_conn, $sql))
        { 
            return true; 
        }
        else
        {
            echo mysqli_error( $this ->_rn_conn);
        }
    }
}

?>