<?php
$email = $_POST['email'];
$message = $_POST['message'];
$to = 'sonyachennh@gmail.com';
$subject = 'Your website';
$from = 'From: sonyachen.com';
$body = "Email: $email \n Message: $message";
?>

<?php
if($POST['submit']){
    if (mail($to, $subject, $body, $from)){
        echo '<p>Thank you for your email</p>';
    }
    else{
        echo '<p>error</p>';
    }
}
?>