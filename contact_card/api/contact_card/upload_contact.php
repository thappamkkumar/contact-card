<?php

	header('Content-Type:application/json; charset=utf-8;');
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods: POST, GET, PUT');
	header('Access-Control-Allow-Headers:Origin, X-Requested-With, Content-Type, Accept');
	
	require("Database/db_connection.php");
	
		$name=$_POST['name'];
		$phone=$_POST['phone'];
		$email=$_POST['email'];
		$address=$_POST['address'];
		$facebook=$_POST['facebook'];
		$instagram=$_POST['instagram'];
		$whatsapp=$_POST['whatsapp'];
		$twitter=$_POST['twitter'];
		$userID=$_POST['userID'];
	
		$profile_image=$_FILES['file']['name'][0];
		 $ext=pathinfo($profile_image, PATHINFO_EXTENSION);
		$image_name=$name.".".$ext;
		
		$target_dir="E:/project/react/contact_cards/public/";
		if(move_uploaded_file($_FILES['file']['tmp_name'][0], $target_dir.$image_name))
		{
		 $sql="INSERT INTO `record` (`S_NO`, `user_ID`, `Name`, `Phone_No`, `E_mail`, `Address`, `Facebook`, `Instagram`, `Whatsapp`, `Twitter`, `Image`) VALUE ('', '$userID', '$name', '$phone', '$email', '$address', '$facebook', '$instagram', '$whatsapp', '$twitter', '$image_name' )";
			if($con->query($sql))
			{
				echo json_encode(array('message'=>'Record inserted successfully','status'=>true));
			}
			else
			{
				$error=$con->error;
				echo Json_encode(array('message'=>$error, 'status'=>false));
			}	
		 
		}else{
				$error=$con->error;
			 echo Json_encode(array('message'=>"enable to upload image in data base", 'status'=>false));
		}		
	 
	 

?>