<?php
if (isset($_POST['email'])) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $company = htmlspecialchars($_POST['company']);
    $job = htmlspecialchars($_POST['job']);
    $size = htmlspecialchars($_POST['size']);
    $reason = htmlspecialchars($_POST['reason']);

    $mailFrom = "From: " . $name . "<" . $email . ">";

    // $mailTo = "r@2060.io";
    $mailTo = "otmanine.salim@gmail.com";

    $mailSubject = "Website contact form";
    $mailBody = "
        Name : " . $name . " \n
        Phone: " . $phone . " \n
        Email: " . $email . " \n
        Company: " . $company . " \n
        job: " . $job . " \n
        size: " . $size . " \n
        reason: " . $reason;

    if (mail($mailTo, $mailSubject, $mailBody, $mailFrom)) {
        header('Location: /success');
    } else {
        header('Location: /error');
    }
}
?>