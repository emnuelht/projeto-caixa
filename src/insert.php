<?php

class Insert {

    private mixed $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function sendTable($nameTable) {
        $stmt = $this->pdo->prepare("INSERT INTO mesas(nome_mesa) VALUES (:name_table)");
        $stmt->execute([":name_table" => $nameTable]);

        return $stmt->rowCount();
    }
}