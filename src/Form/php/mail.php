<?php
$token = "";
$chat_id = "";

$arr = array(
    'Имя:' => $_POST['name'],
    'Телефон:' => $_POST['phone'],
    'E-mail:' => $_POST['email'],
    'Выбор:' => $_POST['select'],
    'Текст:' => $_POST['text']
);

$txt = '';
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    $result = 'success';
} else {
    $result = 'error';
}

$response = ['result' => $result];

header('Content-type: application/json');
echo json_encode($response);
?>