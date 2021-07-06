<?php
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html;charset=utf-8 \r\n";

$message = "<p>Заявка</p>
<p><strong>Name:</strong> $name</p>
<p><strong>Phone:</strong> $phone</p>";

mail( "dronych@funquest.com.ua", "Заказ с лендинга",
    $message, $headers );
	header( "Location: /thankyou.html" );
?>
