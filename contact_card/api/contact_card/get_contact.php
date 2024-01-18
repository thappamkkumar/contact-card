<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-Type:application/json');
	
	require("Database/db_connection.php");
	$data=json_decode(file_get_contents('php://input'),true);
	$start = $data['start'];
	$limits = $data['limits'];
	$username = $data['username']; 
	
	$sql="Select * From record  where user_ID='$username' ORDER BY S_No DESC Limit ".$start.','.$limits;
	$result=$con->query($sql) or die($con->error); 
	if($result->num_rows>0)
	{
		$output=$result->fetch_all(MYSQLI_ASSOC);
		echo Json_encode($output);
	}
	else
	{
		$error=$con->error;
		echo Json_encode(array('message'=>$error, 'status'=>false));
	}
	
?>