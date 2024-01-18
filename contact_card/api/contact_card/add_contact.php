<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-Type:application/json '); 
	
	require("Database/db_connection.php");
	
	$data=json_decode(file_get_contents("php://input"),true);
	
	$name=$data['Name'];
	$phone=$data['Phone'];
	$email=$data['Email'];
	$address=$data['Address'];	$facebook=$data['Facebook'];
	$instagram=$data['Instagram'];
	$whatsapp=$data['Whatsapp'];
	$twitter=$data['Twitter']; 
	
	
	
/*	
	$sql="INSERT INTO `record` (`S_NO`, `Name`, `Phone_No`, `E_mail`, `Address`, `Facebook`, `Instagram`, `Whatsapp`, `Twitter`) VALUE ('', '$name', '$phone', '$email', '$address', '$facebook', '$instagram', '$whatsapp', '$twitter' )";
	if($con->query($sql))
	{
		echo json_encode(array('message'=>'Record inserted successfully','status'=>true));
	}
	else
	{
		$error=$con->error;
		echo Json_encode(array('message'=>$error, 'status'=>false));
	}
	*/
?>