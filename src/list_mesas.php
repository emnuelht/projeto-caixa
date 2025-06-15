<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include "conn.php";
    include "query.php";
    $conn = new Conn();
    $query = new Query($conn->init());

    $response = $query->listMesas();

    echo json_encode($response);
}