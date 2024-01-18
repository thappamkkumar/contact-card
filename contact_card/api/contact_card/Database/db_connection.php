
<?php      

   $host = "localhost";  
   $user = "root";  
   $password = "";  
   $db_name="contact_card";
      
    $con =new  mysqli($host, $user, $password,$db_name);  
    if($con->connect_errno)
		{  
				die("Failed to connect : ". mysqli_connect_error());  
		}


?>