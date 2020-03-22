<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$feedback = $_POST['message'];
$to = "haydengunk@gmail.com";
$mailheader = "From: $email\\r\\n";
mail($to, $subject , $feedback , $mailheader);
header( "Location: http://gettask22.000webhostapp.com/" );
?>