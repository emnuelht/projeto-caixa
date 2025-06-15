<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    include "conn.php";
    include "insert.php";
    $conn = new Conn();
    $insert = new Insert($conn->init());

    $name_table = $data['nome_mesa'];

    $response = $insert->sendTable($name_table);

    echo json_encode(["success" => $response > 0]);
}