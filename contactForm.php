<?php
 if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $mailFrom = "learning@rachels.com";
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $mailTo = "learningatrachels@hotmail.com";
   //  $headers .= "From: ".$mailFrom;
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: '.$mailFrom."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();
   //  start of message
    $txt = '<html><body>';
    $txt .= '<p>You recieved an email from: '. '<b>' . $email . '</b></p>';
    $txt .= '<p>Sender name: ' . '<b>' . $name . '</b></p>';
    $txt .= '<p>Sender phone number (if provided): ' . '<b>' . $phone . '</b></p>';
    $txt .= '<p>Sender message: '. '<b>' . $message . '</b></p>';
    $txt .= '</body></html>';

   //  $txt = "Sender Email: ". "<b>". $name."</b>". ".\n\n" . "Phone Number (if given): ". "<b>".$phone."</b>" . ".\n\n" "Description: " .$message;
     mail($mailTo, $subject, $txt, $headers);
     header("Location: mailSent.html");
}
 ?>