import ElementCard from "../components/ElementCard";

const ContentSection = (props) => {

    const { categoria } = props;

    if (categoria == "FRONT END") {
        return (
            <>
                <div className="contentsection-contenedor">
                    <div className="frontBG contentsection-titulo">{categoria}</div>
                    <div className="contentsection-contenido">
                        <ElementCard categoria={categoria} />
                        <ElementCard categoria={categoria}/>
                        <ElementCard categoria={categoria}/>
                    </div>
                </div>
            </>
        )
        }if (categoria == "BACK END") {
            return (
                <>
                    <div className="contentsection-contenedor">
                        <div className="backBG contentsection-titulo">{categoria}</div>
                        <div className="contentsection-contenido">
                            <ElementCard categoria={categoria} />
                            <ElementCard categoria={categoria}/>
                            <ElementCard categoria={categoria}/>
                        </div>
                    </div>
                </>
            )
        }if (categoria == "INOVACIÓN Y GESTIÓN") {
            return (
                <>
                    <div className="contentsection-contenedor">
                        <div className="inovBG contentsection-titulo">{categoria}</div>
                        <div className="contentsection-contenido">
                            <ElementCard categoria={categoria} />
                            <ElementCard categoria={categoria}/>
                            <ElementCard categoria={categoria}/>
                        </div>
                    </div>
                </>
            )
        }    

    

}

export default ContentSection