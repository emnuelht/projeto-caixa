<?php

class Conn {
    public function init() {
        try {
            $host = 'localhost';
            $dbname = 'emn__caixa';
            $user = 'root';
            $pass = '';
            $charset = 'utf8mb4';

            // DSN (Data Source Name)
            $dsn = "mysql:host=$host;dbname=$dbname;charset=$charset";

            // Opções avançadas
            $options = [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Erros como exceções
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Fetch como array associativo por padrão
                PDO::ATTR_EMULATE_PREPARES   => false,                  // Desativa emulação de prepares (segurança)
                PDO::ATTR_PERSISTENT         => true,                   // Conexão persistente (cuidado com limites de conexão)
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES $charset COLLATE utf8mb4_unicode_ci", // Charset inicial
            ];
            return new PDO($dsn, $user, $pass, $options);
        } catch (PDOException $e) {
            error_log("Erro na conexão PDO: " . $e->getMessage());
            die("Erro ao conectar com o banco de dados.");
            return false;
        }
    }
}