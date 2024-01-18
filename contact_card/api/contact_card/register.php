<?php

	header('Content-Type:application/json; charset=utf-8;');
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods: POST, GET, PUT');
	header('Access-Control-Allow-Headers:Origin, X-Requested-With, Content-Type, Accept');
	
	require("Database/db_connection.php");
	
		$username=$_POST['username'];
		$password=$_POST['password']; 
		$sqll="Select * from login where ID= '$username'";
		$resultl=$con->query($sqll);
		if($resultl->num_rows>0)
		{
			echo Json_encode(array('message'=>"Username already exist. ", 'status'=>false));
		}
		else
		{
			$username_dem=str_replace(' ', '_', $username);
			
			$profile_image=$_FILES['file']['name'][0];
			 $ext=pathinfo($profile_image, PATHINFO_EXTENSION);
			$image_name=$username_dem.".".$ext;
			$target_dir="E:/project/react/contact_cards/public/userProfileImage/";
			
			if(move_uploaded_file($_FILES['file']['tmp_name'][0], $target_dir.$image_name))
			{ 
				$sql="INSERT INTO `login` (`S_NO`, `ID`, `Password`, `Image`) VALUES (NULL, '$username', '$password', '$image_name')";
				if($con->query($sql))
				{
					echo json_encode(array('message'=>'Successfully register new account','status'=>true));
				}
				else
				{
					$error=$con->error;
					echo Json_encode(array('message'=>"Enable to register", 'status'=>false));
				}	
				 
			}
			else
			{
					$error=$con->error;
				 echo Json_encode(array('message'=>"Enable to upload image in data base", 'status'=>false));
			}		
		}
	 

?>