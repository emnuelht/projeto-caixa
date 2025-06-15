import '../css/button_add_mesa.css';

function ButtonAddMesa({ iOnClick }) {
    return (
        <button className="button_add_mesa" type="button" onClick={iOnClick}>
            <img src="/icon_add.svg" alt="Botão de adicionar" />
        </button>
    );
}

export default ButtonAddMesa;