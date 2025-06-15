import '../css/mesa.css';

function Mesa({ title }) {
    return (
        <div className="container_mesa">
            <img className='container_mesa__icon' src="/icon_options.svg" alt="Icone de opções" />
            <span className="container_mesa__title">{title}</span>
        </div>
    );
}

export default Mesa;