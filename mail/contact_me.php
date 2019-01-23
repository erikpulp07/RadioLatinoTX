<?php
// Check for empty fields

require 'mailer.php';


if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$subject = "Radio Latino TX";

 if(send_mail("erikpulp07@gmail.com", $email, $subject, $message,$phone)){
      echo json_encode("{'msg':'El correo ha sido enviado de forma exitosa'}");
 }
 else{ //echo "Algo salio mal";
      echo json_encode("{'msg':'Algo ha salido mal'}");   
} 


