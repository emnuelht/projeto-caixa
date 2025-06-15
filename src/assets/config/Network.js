class Network {
    constructor(){}

    async listMesas() {
        try {
            const request = await fetch('http://localhost/caixa/config/list_mesas.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!request.ok) {
                return { error: "Falha na requisição" };
            }

            const response = await request.json();
            return response;
        } catch (error) {
            return { error: error }
        }
    }

    async addMesa(nome_mesa) {
        try {
            const request = await fetch('http://localhost/caixa/config/add_mesa.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome_mesa: nome_mesa })
            });

            if (!request.ok) {
                return { error: "Falha na requisição" };
            }

            const response = await request.json();
            return response;
        } catch (error) {
            return { error: error }
        }
    }
}

export default Network;