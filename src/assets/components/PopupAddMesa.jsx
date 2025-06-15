import { useEffect, useRef } from 'react';
import '../css/popup_add_mesa.css';

function PopupAddMesa({ iHandleClickFundo, iHandleSubmit }) {
    const fundo = useRef(null);

    useEffect(() => {
        if (fundo!==null) {
            fundo.current.addEventListener('click', iHandleClickFundo);
        }
    },[]);

    return (
        <div className={`popup_add_mesa`}>
            <div ref={fundo} className="popup_add_mesa_fnd"></div>
            <div className="popup_add_mesa__content">
                <span className="content__title">Adicionar Mesa</span>
                <form className="content__form" method="post" onSubmit={iHandleSubmit}>
                    <div className="form__input_label">
                        <label htmlFor="nome_mesa">Nome da mesa<span className='obg'>*</span></label>
                        <input className="input_label__input" type="text" name="nome_mesa" id='nome_mesa' placeholder="Digite o nome da mesa" required/>
                    </div>
                    <button className="form__submit" type="submit">Criar</button>
                </form>
            </div>
        </div>
    );
}

export default PopupAddMesa;