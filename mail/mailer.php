<?php
    
function send_mail($to,$from,$subject,$msg,$phone){   

    try {


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
        // create email headers
        $headers = 'From: '.$from."\r\n".
        'Reply-To: '.$from."\r\n" .
        'X-Mailer: PHP/' . phpversion();
        @mail($to, $subject, $msg, $headers); 

        return true;
    } catch (Exception $e) {
        return false;
    }
}
?>


