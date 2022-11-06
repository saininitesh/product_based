<?php
         $host = "localhost";
         $username = "root";
         $pass = "";
         $dev="developer";
         $con = mysql_connect($host, $username, $pass,$dev);
         if(!$con ) {
            die('Could not connect: ' . mysql_error());
         }
         
else{
        $name= $_POST["name"];
        $email= $_POST["email"];
        $password=  $_POST["password"];
        $sql = "INSERT INTO logininfo  VALUES ('$name', 
            '$email','$password')";
          $result=mysql_query($sql);
         echo 'Connected successfully';
}


         mysql_close($con);
      ?>