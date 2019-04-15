<?php

$recepient = "rphomin69@gmail.com";
$sitename = "Infracode";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nE-mail: $email \nТелефон: $phone \nТекст: $text";

$pagetitle = "Обратная связь с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");