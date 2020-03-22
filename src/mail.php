<?php

if($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "haydengunk@gmail.com";
    $mailheader = 'From: ' . $email . "\r\n";

    mail($to, $subject , $message , $mailheader);
header( "Location: index.html" );
}

?>