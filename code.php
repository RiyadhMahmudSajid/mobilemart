<?php
  $host = "localhost";
  $username = "root";
  $password = "";
  $database = "web";

  $con = mysqli_connect( $host,$username,$password,$database);
  if(!$con){
        echo "connection faild";
  }
  else{
     echo "<div style='color:white;font-size: 20px; text-align: center; width: 50%; margin: auto; background-color: black ;'>
        You submit your data. Wait 2 days for mobile
    </div>";
    echo  "<div style ='text-align: center; margin-top: 20px;'>
    <button onclick=\"window.location.href='index.html'\"
         style='padding: 10px 20px;font-size: 16px;background-color: rgb(7, 150, 246); color:black;cursor: pointer;border-radius: 5px;'>
         Back Home


    </button>
  </div>";
  }
  $ad = $_POST['fn'];
  $eml = $_POST['email'];
  $por = $_POST['product'];

  $query = "INSERT INTO info(Address,email,Product)VALUES(' $ad','$eml','$por')";
  mysqli_query($con,$query);
?>
