<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-Type:application/json');
	require("Database/db_connection.php");
	$data=json_decode(file_get_contents('php://input'),true);
	$userid=$data['id'];
	$password=$data['password'];
	 
	$sql="Select * from login where ID= '$userid' AND Password= '$password' ";
	$result=$con->query($sql) or die($con->error);
	if($result->num_rows>0)
	{
		$output=$result->fetch_all(MYSQLI_ASSOC);
		
		$image=$output[0]['Image'];
		echo json_encode(array( 'image'=>$image,'status'=>true));
	}
	else
	{
		$error=$con->error;
		echo Json_encode(array('message'=>$error, 'status'=>false)); 
	
	}
	
?>