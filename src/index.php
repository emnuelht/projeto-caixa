<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
</head>
<body>

    <div class="mesas"></div>

    <form method="post">
        <input type="text" name="name_table" placeholder="Digite o nome da mesa">
        <br>
        <button type="submit">Criar mesa</button>
    </form>

    <script>

        document.querySelector('form').addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameTable = e.target.name_table.value;

            const request = await fetch('send_table.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name_table: nameTable })
            });

            if (!request.ok) {
                console.log("Erro ao enviar");
                return;
            }

            const response = await request.json();

            if (response.success) {
                alert('Mesa criada com sucesso!');
                window.location.reload();
            } else {
                alert('Ocorreu um erro ao criar a mesa!');
            }
        });

        const mesas = document.querySelector('.mesas');

        async function listMesas() {
            try {
                const request = await fetch('list_mesas.php',{
                    method: 'POST',
                    headers: { 'Content-Type':'application/json' }
                });
    
                if (!request.ok) {
                    console.log("Error...");
                    return;
                }
    
                const response = await request.json();
    
                if (response.success) {
                    return response.data;
                } else {
                    console.log("ocorreu um error");
                    return false;
                }
            } catch (error) {
                console.error(error);
                return false;
            }
        }

        listMesas().then(data => {
            if (data) {
                Array.from(data).forEach(item => {
                    const div = document.createElement('div');
                    const span = document.createElement('span');

                    span.textContent = item.nome_mesa;

                    div.appendChild(span);
                    mesas.appendChild(div);
                })
            }
        });

    </script>

</body>
</html>