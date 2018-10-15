<?php

	$txtname = trim($_POST['nme']);

	$txtemail = trim($_POST['email']);

	$txtphone = trim($_POST['tel']);

	// от кого
	$fromMail = 'info@wialon-service.de';
	$fromName = 'Лид с лендинга по GPS-мониторингу';

	// Сюда введите Ваш email
	$emailTo = 'info@wialon-service.de';

	$subject = 'Форма обратной связи';
	$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
	$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
	$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

	// тело письма
	$body = "Имя: $txtname\nТелефон: $txtphone\ne-mail: $txtemail";
	$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );

	echo 'ok';
?>
