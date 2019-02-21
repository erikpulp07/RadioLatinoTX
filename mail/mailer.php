<?php
    
function send_mail($to,$from,$subject,$msg,$phone, $name){   

    try {


        //Attachments
    //   $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //   $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

        //Content
        $boundary = str_replace(" ", "", date('l jS \of F Y h i s A'));

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

        $headersMail = '';
        $headersMail .= 'From: ' . $name . "\r\n" . 'Reply-To: ' . $from . "\r\n";
        $headersMail .= 'Return-Path: ' . $from . "\r\n";
        $headersMail .= 'MIME-Version: 1.0' . "\r\n";
        $headersMail .= "Content-Type: multipart/alternative; boundary = \"" . $boundary . "\"\r\n\r\n";
        $headersMail .= '--' . $boundary . "\r\n";
        $headersMail .= 'Content-Type: text/html; charset=ISO-8859-1' . "\r\n";
        $headersMail .= 'Content-Transfer-Encoding: base64' . "\r\n\r\n";
        $headersMail .= rtrim(chunk_split(base64_encode($msg)));

    //    $headers = [
    //     'From'                      => "$name <$from>",
    //     'Sender'                    => $from,
    //     'Return-Path'               => $from,
    //     'MIME-Version'              => '1.0',
    //     'Content-Type'              => 'text/html; charset=UTF-8; format=flowed; delsp=yes',
    //     'Content-Transfer-Encoding' => '8Bit',
    //     'X-Mailer'                  => 'Hugo - Zen',
    //   ];
    //   $mime_headers = [];
    //   foreach ($headers as $key => $value) {
    //     $mime_headers[] = "$key: $value";
    //   }
    //   $mail_headers = join("\n", $mime_headers);

      mail($to, $subject, "", $headersMail); 

        return true;
    } catch (Exception $e) {
        return false;
    }
}
?>


