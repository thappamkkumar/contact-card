<?php
	 
header('Access-Control-Allow-Origin:*'); 
header('Contetnt-Type:application/json');
 
  
require("Database/db_connection.php");
	$data=json_decode(file_get_contents('php://input'),true);
	 
	$username = $data['username']; 
	
	$sql="Select * From record where user_ID='$username' " ;
	 
 
	$result = $con->query($sql) or die("Query Failed"); 
	$output=$result->num_rows;
	echo Json_encode($output);
 
	

?>