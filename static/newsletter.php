<?php
if (isset($_POST['newsletter'])) {
    $newsletter = htmlspecialchars($_POST['newsletter']);

    $mailFrom = "From: <" . $newsletter . ">";

    // $mailTo = "r@2060.io";
    $mailTo = "otmanine.salim@gmail.com";

    $mailSubject = "Website newsletter form";
    $mailBody = "Newsletter subscription from : \n
        Email: " . $email;

    if (mail($mailTo, $mailSubject, $mailBody, $mailFrom)) {
        header('Location: /success');
    } else {
        header('Location: /error');
    }
}
?>