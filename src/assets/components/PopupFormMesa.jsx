import { useEffect, useRef, useState } from "react";
import '../css/container_popup_form_mesa.css';

function PopupFormMesa({ title, iHandleClosePopup }) {
    const produtos = [['produto1', 2], ['produto2', 5], ['produto3', 7], ['produto4', 4], ['produto5', 8], ['produto6', 1], ['produto7', 7], ['produto8', 7]];
    const [valueSearch, setValueSearch] = useState('');
    const refSelectView = useRef(null);
    const refInputLabel = useRef(null);
    const refButtonAddDynamic = useRef(null);
    const refButtonSelect = useRef(null);
    const [inputs, setInputs] = useState([]);
    const [valuesSelected, setValuesSelected] = useState([]);

    function handleSelecione(e) {
        const button = e.target;
        button.classList.add("close");
        refSelectView.current.classList.remove("close");
    }

    function handleAddPedido(e) {
        const button = e.target;
        button.classList.add("close");
        refInputLabel.current.classList.remove("close");
    }

    function handleItemSelected(e) {
        const item = e.target.textContent;
        const [itemProduto, itemQtd] = item.split('-');
        const itemQtdNum = itemQtd.replace('x', '');

        setValuesSelected(prev => [...prev, itemProduto.trim()]);
        setInputs(prev => [
            ...prev,
            {
                valueInput: itemProduto.trim(),
                valueQtdDigitada: '',
                valueQtdMax: itemQtdNum.trim()
            }
        ]);

        refButtonAddDynamic.current.classList.remove("close");
        refButtonSelect.current.classList.remove("close");
        refInputLabel.current.classList.add("close");
        refSelectView.current.classList.add("close");
    }


    function handleChangeQtd(index, value) {
        setInputs(prev => {
            const updated = [...prev];
            updated[index].valueQtdDigitada = value;
            return updated;
        });
    }

    function ModelInputLabel({ valueInput, valueQtdDigitada, valueQtdMax, onChange }) {
        return (
            <div className="container_input_pedido">
                <div className="container_input_pedido__input_label">
                    <p>Pedido</p>
                    <input type="text" name="pedido_in[]" value={valueInput} readOnly />
                </div>
                <div className="container_input_pedido__input_label">
                    <p>Quantidade</p>
                    <input
                        type="text"
                        name="qtd[]"
                        value={valueQtdDigitada}
                        onChange={(e) => {
                            const val = e.target.value;

                            if (/^\d*$/.test(val)) {
                                const numVal = parseInt(val, 10);

                                if (val === '' || numVal <= parseInt(valueQtdMax, 10)) {
                                    onChange(e);
                                }
                            }
                        }}
                    />
                </div>
            </div>
        );
    }


    return (
        <div className="container_popup_form_mesa">
            <div onClick={iHandleClosePopup} className="container_popup_form_mesa__fundo"></div>
            <div className="container_popup_form_mesa__content">
                <img onClick={iHandleClosePopup} className="content__close" src="/icon_close.svg" alt="Botão de fechar(x)" />
                <p className="content__title">{title}</p>
                <form className="content__form" method="post">
                    <div className="form__container_dynamic">
                        <div className="container_dynamic__content">
                            {inputs.map((item, index) => (
                                <ModelInputLabel
                                    key={index}
                                    valueInput={item.valueInput}
                                    valueQtdDigitada={item.valueQtdDigitada}
                                    valueQtdMax={item.valueQtdMax}
                                    onChange={(e) => handleChangeQtd(index, e.target.value)}
                                />
                            ))}
                        </div>
                        <div className="container_dynamic_float">
                            <div ref={refInputLabel} className="container_dynamic__input_label close">
                                <span>Produto</span>
                                <div className="produto_list_produtos">
                                    <p ref={refButtonSelect} className="produto_list_produtos__view_select" onClick={handleSelecione}>Selecione</p>
                                    <div ref={refSelectView} className="produto_list_produtos__select_view close">
                                        <input className="select_view__input" type="text" name="search_produto" placeholder="Pesquisar produto pelo nome" value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} />
                                        <ul className="produto_list_produtos__list">
                                            {
                                                produtos
                                                .filter(filter => valueSearch === '' ? true : filter[0].includes(valueSearch))
                                                .filter(filter => !valuesSelected.includes(filter[0]))
                                                .map((map, i) => {
                                                    return <li onClick={handleItemSelected} className="list__item" key={i}>{map[0]} - {map[1]}x</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button ref={refButtonAddDynamic} type="button" className="container_dynamic__add" onClick={handleAddPedido}>Adicionar Pedido</button>
                        </div>
                    </div>
                    <div className="form__buttons">
                        <button className="buttons_button submit" type="submit">Adicionar</button>
                        <button className="buttons_button fechar_pedido" type="button">Fechar Pedido</button>
                        <button className="buttons_button imprimir_noto" type="button">Imprimir Nota</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PopupFormMesa;
