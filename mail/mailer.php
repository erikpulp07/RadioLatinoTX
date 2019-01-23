<?php
require 'PHPMailer.php';
require 'Exception.php';
function send_mail($to,$from,$subject,$msg,$phone){


    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {
        //Server settings
        $mail->SMTPDebug = 2;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.mail.yahoo.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'erikpulp07@yahoo.es';                 // SMTP username
        $mail->Password = 'Pulp@nocha07';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom('erikpulp07@yahoo.es', 'Mailer');
        $mail->addAddress($to);     // Add a recipient
    //   $mail->addAddress('ellen@example.com');               // Name is optional
    //   $mail->addReplyTo('info@example.com', 'Information');
    //   $mail->addCC('cc@example.com');
    //   $mail->addBCC('bcc@example.com');

        //Attachments
    //   $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //   $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

        //Content

        $msg    ='
        <div style="text-align:left">
        <h2>'.$subject.'</h2>
        <h3>'.$from.'</h3>
        '.$msg.'
        <br/>
        <p>Mi telefono es:'.$phone.'</p>
        </div>
        ';


        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = $msg;
      //@  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        return true;
    } catch (Exception $e) {
        return false;
    }
}
?>


