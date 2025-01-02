import VideoImg from "../images/Player.png";
import VideoBG from "../images/PlayerBG.png";

function TitleCard() {

    return (
        <>
            <div className="titlecard-contenedor">
                <div className="titlecard-contenedor-texto">
                    <div className="titlecard-contenedor-texto-titulo">FRONT END</div>
                    <div className="titlecard-contenedor-texto-subtitulo">Challenge React</div>
                    <div className="titlecard-contenedor-texto-contenido">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</div>
                </div>
                <div className="titlecard-contenedor-imagen">
                    <img className="titlecard-contenedor-imagen-imagen" src={VideoImg} alt="imagen-video" />
                </div>
            </div>
        </>
    )

}

export default TitleCard