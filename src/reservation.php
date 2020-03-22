<?php
 
if($_POST) {
    $visitor_name = "";
    $visitor_email = "";
    $visitor_phone = "";
    $total_adults = "";
    $total_children = "";
    $checkin_date = "";
    $checkout_date = "";
    $room_type = "";
    $visitor_message = "";
     
    if(isset($_POST['visitor_name'])) {
        $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['visitor_email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
         
    }
     
    if(isset($_POST['visitor_phone'])) {
        $visitor_phone = filter_var($_POST['visitor_phone'], FILTER_SANITIZE_NUMBER_INT);
    }
     
    if(isset($_POST['total_adults'])) {
        $total_adults = filter_var($_POST['total_adults'], FILTER_SANITIZE_NUMBER_INT);
    }
 
    if(isset($_POST['total_children'])) {
        $total_children = filter_var($_POST['total_children'], FILTER_SANITIZE_NUMBER_INT);
    }
 
    if(isset($_POST['checkin'])) {
        $checkin_date = filter_var($_POST['checkin'], FILTER_SANITIZE_NUMBER_INT);
    }
 
    if(isset($_POST['checkout'])) {
        $checkout_date = filter_var($_POST['checkout'], FILTER_SANITIZE_NUMBER_INT);
    }
 
    if(isset($_POST['room_preference'])) {
        $room_type = filter_var($_POST['room_preference'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['visitor_message'])) {
        $visitor_message = htmlspecialchars($_POST['visitor_message']);
    }
 
 
    $recipient = "haydengunk@gmail.com";
     
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";
 
    $email_content = "<html><body>";
    $email_content .= "<table style='font-family: Arial;'><tbody><tr><td style='background: #eee; padding: 10px;'>Visitor Name</td><td style='background: #fda; padding: 10px;'>$visitor_name</td></tr>";
    $email_content .= "<tr><td style='background: #eee; padding: 10px;'>Visitor Email</td><td style='background: #fda; padding: 10px;'>$visitor_email</td></tr>";
    $email_content .= "<tr><td style='background: #eee; padding: 10px;'>Visitor Phone</td><td style='background: #fda; padding: 10px;'>$visitor_phone</td></tr>";
    $email_content .= "<tr><td style='background: #eee; padding: 10px;'>Total Adults</td><td style='background: #fda; padding: 10px;'>$total_adults</td></tr>";
    $email_content .= "<tr><td style='background: #eee; padding: 10px;'>Total Children</td><td style='background: #fda; padding: 10px;'>$total_children</td></tr>";
    $email_content .= "<tr><td style='background: #eee; padding: 10px;'>Check-in Date</td><td style='background: #fda; padding: 10px;'>$checkin_date</td></tr>";
    $email_content .= "<tr><td style='background: #eee; padding: 10px;'>Check-out Date</td><td style='background: #fda; padding: 10px;'>$checkout_date</td></tr>";
    $email_content .= "<tr><td style='background: #eee; padding: 10px;'>Room Type</td><td style='background: #fda; padding: 10px;'>$room_type</td></tr></tbody></table>";
 
    $email_content .= "<p style='font-family: Arial; font-size: 1.25rem;'><strong>Special Request from $visitor_name &mdash;</strong><i> $visitor_message</i>.</p>";
    $email_content .= '</body></html>';
 
    echo $email_content;
     
    if(mail($recipient, "Hotel Room Reservation Confirmation", $email_content, $headers)) {
        echo '<p>Thank you for booking a hotel room with us. We hope you have a pleasant stay.</p>';
    } else {
        echo '<p>We are sorry but the booking confirmation email did not go through.</p>';
    }
     
} else {
    echo '<p>Something went wrong</p>';
}
 
?>