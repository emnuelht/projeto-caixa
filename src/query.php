<?php

class Query {
    
    private mixed $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function listMesas() {
        $stmt = $this->pdo->prepare("SELECT id, nome_mesa, pedido, finalizar_pedido, created_in FROM mesas WHERE deleted = 0");
        $stmt->execute();

        $fetch = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return ["success" => count($fetch) > 0, "data" => $fetch];
    }

}