import image from "../images/PlaceholderImage.jpg";
import DeleteIcon from "../images/DeleteIcon.png";
import EditIcon from "../images/EditIcon.png";

const ElementCard = (props) => {

    const { categoria } = props;

    if (categoria == "FRONT END") {
        return (
            <>
                <div className="elementcard-contenedor-front">
                    <div className="elementcard-imagen">
                        <img className="elementcard-imagen-imagen-front" src={image} alt={image} />
                    </div>
                    <div className="elementcard-botones">
                        <div className="elementcard-botones-borrar">
                            <img className="elementcard-botones-borrar-icono" src={DeleteIcon} alt={DeleteIcon} />
                            BORRAR
                        </div>
                        <div className="elementcard-botones-editar">
                            <img className="elementcard-botones-editar-icono" src={EditIcon} alt={EditIcon} />
                            EDITAR
                        </div>
                    </div>
                </div>
            </>
        )
    }if (categoria == "BACK END") {
        return (
            <>
                <div className="elementcard-contenedor-back">
                    <div className="elementcard-imagen">
                        <img className="elementcard-imagen-imagen-back" src={image} alt={image} />
                    </div>
                    <div className="elementcard-botones">
                        <div className="elementcard-botones-borrar">
                            <img className="elementcard-botones-borrar-icono" src={DeleteIcon} alt={DeleteIcon} />
                            BORRAR
                        </div>
                        <div className="elementcard-botones-editar">
                            <img className="elementcard-botones-editar-icono" src={EditIcon} alt={EditIcon} />
                            EDITAR
                        </div>
                    </div>
                </div>
            </>
        )
    }if (categoria == "INOVACIÓN Y GESTIÓN") {
        return (
            <>
                <div className="elementcard-contenedor-inov">
                    <div className="elementcard-imagen">
                        <img className="elementcard-imagen-imagen-inov" src={image} alt={image} />
                    </div>
                    <div className="elementcard-botones">
                        <div className="elementcard-botones-borrar">
                            <img className="elementcard-botones-borrar-icono" src={DeleteIcon} alt={DeleteIcon} />
                            BORRAR
                        </div>
                        <div className="elementcard-botones-editar">
                            <img className="elementcard-botones-editar-icono" src={EditIcon} alt={EditIcon} />
                            EDITAR
                        </div>
                    </div>
                </div>
            </>
        )
    }    

}

export default ElementCard