<?php
if (isset($_POST['email'])) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $background = htmlspecialchars($_POST['background']);
    $job = htmlspecialchars($_POST['job']);
    $location = htmlspecialchars($_POST['location']);
    $remote = htmlspecialchars($_POST['remote']);

    $from_email = $email;
    // $recipient_email = "r@2060.io";
    $recipient_email = "otmanine.salim@gmail.com";

    $sender_name = $name;
    $reply_to_email = $email;
    $subject = "Website career form";
    $message = "
        Name : " . $name . " \n
        Phone: " . $phone . " \n
        Email: " . $email . " \n
        background: " . $background . " \n
        job: " . $job . " \n
        location: " . $location . " \n
        remote: " . $remote;

    //Get uploaded file data using $_FILES array
    $tmp_name = $_FILES['resume']['tmp_name']; // get the temporary file name of the file on the server
    $name = $_FILES['resume']['name']; // get the name of the file
    $size = $_FILES['resume']['size']; // get size of the file for size validation
    $type = $_FILES['resume']['type']; // get type of the file
    $error = $_FILES['resume']['error']; // get the error (if any)

    //validate form field for attaching the file
    if ($error > 0) {
        die('Upload error or No files uploaded');
    }

    //read from the uploaded file & base64_encode content
    $handle = fopen($tmp_name, "r"); // set the file handle only for reading the file
    $content = fread($handle, $size); // reading the file
    fclose($handle);                 // close upon completion

    $encoded_content = chunk_split(base64_encode($content));
    $boundary = md5("random"); // define boundary with a md5 hashed value

    //header
    $headers = "MIME-Version: 1.0\r\n"; // Defining the MIME version
    $headers .= "From:" . $from_email . "\r\n"; // Sender Email
    $headers .= "Reply-To: " . $reply_to_email . "\r\n"; // Email address to reach back
    $headers .= "Content-Type: multipart/mixed;"; // Defining Content-Type
    $headers .= "boundary = $boundary\r\n"; //Defining the Boundary

    //plain text
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($message));

    //attachment
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: $type; name=" . $name . "\r\n";
    $body .= "Content-Disposition: attachment; filename=" . $name . "\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n";
    $body .= "X-Attachment-Id: " . rand(1000, 99999) . "\r\n\r\n";
    $body .= $encoded_content; // Attaching the encoded file with email

    if (mail($recipient_email, $subject, $body, $headers)) {
        header('Location: /success');
    } else {
        header('Location: /error');
    }
}
?>