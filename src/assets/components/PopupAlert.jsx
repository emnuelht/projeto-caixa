import '../css/container_popup_alert.css';

function PopupAlert({ iSuccess }) {
    return (
        <div className={`container_popup_alert ${iSuccess?'success':'error'}`}>
            {
                iSuccess
                ? <img src="/icon_success.svg" alt="Icone de sucesso" />
                : <img src="/icon_error.svg" alt="Icone de error" />
            }
            <div className='container_popup_alert__msg'>
                <span className="msg__text">{iSuccess ? "Operação realizada com sucesso!" : "Ocorreu um error na operação, por favor tente novamente!"}</span>
                {!iSuccess && <span className='msg__text_error'>Se o error persistir entre em contato com o administrador!</span>}
            </div>
        </div>
    );
}

export default PopupAlert;
