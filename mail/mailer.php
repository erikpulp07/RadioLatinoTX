<?php
    
function send_mail($to,$from,$subject,$msg,$phone, $name){   

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
        <h1>'. $name .'</h1>
        </div>
        ';
        // create email headers
       // $headers = 'From: '.$from."\r\n".
       // 'Reply-To: '.$from."\r\n" .
       // 'X-Mailer: PHP/' . phpversion();

       $headers = [
        'From'                      => "$name <$from>",
        'Sender'                    => $from,
        'Return-Path'               => $from,
        'MIME-Version'              => '1.0',
        'Content-Type'              => 'text/html; charset=UTF-8; format=flowed; delsp=yes',
        'Content-Transfer-Encoding' => '8Bit',
        'X-Mailer'                  => 'Hugo - Zen',
      ];
      $mime_headers = [];
      foreach ($headers as $key => $value) {
        $mime_headers[] = "$key: $value";
      }
      $mail_headers = join("\n", $mime_headers);

        @mail($to, $subject, $msg, $mail_headers); 

        return true;
    } catch (Exception $e) {
        return false;
    }
}
?>


