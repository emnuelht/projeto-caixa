import { useEffect, useRef, useState } from "react";
import Network from "../assets/config/Network";
import Mesa from "../assets/components/Mesa";
import '../assets/css/home.css';
import ButtonAddMesa from "../assets/components/ButtonAddMesa";
import PopupAddMesa from "../assets/components/PopupAddMesa";
import PopupAlert from "../assets/components/PopupAlert";
import Loading from "../assets/components/Loading";
import PopupFormMesa from "../assets/components/PopupFormMesa";

function Home() {
    const network = new Network();
    const [dataMesas, setDataMesas] = useState(null);
    const [popupAddMesa, setPopupAddMesa] = useState(false);
    const [popupAlert, setPopupAlert] = useState(false);
    const [popupAlertSuccess, setPopupAlertSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const refContainerMesas = useRef(null);

    useEffect(() => {
        network.listMesas().then(response => {
            if (response.success) {
                setDataMesas(response.data);
            }
        });

        if (refContainerMesas !== null) {
            setInterval(() => {

            }, 1000);
        }
    },[]);

    function iHandleSubmitPopupAddMesa(e) {
        e.preventDefault();

        setPopupAddMesa(false);
        setLoading(true);
        network.addMesa(e.target.nome_mesa.value).then(response => {
            if (response.success) {
                setPopupAlertSuccess(true);
            } else {
                setPopupAlertSuccess(false);
            }
            setPopupAlert(true);
            setTimeout(() => {
                window.location.reload();
            }, 1300);
        });
    }

    return (
        <section className="home">
            {true && <PopupFormMesa title={"Mesa 1"} />}
            {loading && <Loading />}
            {popupAlert && <PopupAlert iSuccess={popupAlertSuccess} />}
            {popupAddMesa && <PopupAddMesa iHandleClickFundo={() => setPopupAddMesa(false)} iHandleSubmit={iHandleSubmitPopupAddMesa} />}
            <section ref={refContainerMesas} className="home__container_mesas">
                {
                    dataMesas !== null 
                    ? Array.from(dataMesas).map((map, i) => <Mesa key={i} title={map.nome_mesa} />)
                    : "loading..."
                }
                <ButtonAddMesa iOnClick={() => setPopupAddMesa(!popupAddMesa)} />
            </section>
        </section>
    )
}

export default Home;