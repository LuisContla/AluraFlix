import React, { useEffect, useState } from 'react';

import DeleteIcon from "../images/DeleteIcon.png";
import EditIcon from "../images/EditIcon.png";

const ContentSection = (props) => {

    const { categoria } = props;

    const [proyectos, setProyectos] = useState({
        Frontend: [],
        Backend: [],
        Gestión: []
    });

    useEffect(() => {
        fetch("http://localhost:3000/proyectos")
            .then(res => res.json())
            .then(data => {
                const frontend = data.filter(p => p.categoria === "FRONT END");
                const backend = data.filter(p => p.categoria === "BACK END");
                const gestion = data.filter(p => p.categoria === "INOVACIÓN Y GESTIÓN");

                setProyectos({ Frontend: frontend, Backend: backend, Gestión: gestion });
            })
            .catch(err => console.error("Error al obtener proyectos:", err));
    }, []);

    if (categoria == "FRONT END") {
        return (
            <>
                <div className="contentsection-contenedor">
                    <div className="frontBG contentsection-titulo">{categoria}</div>
                    <div className="contentsection-contenido">
                        <div className="slider">
                            {proyectos.Frontend.map(proyecto => (
                                <div className="elementcard-contenedor-front" key={proyecto.id}>
                                    <div className="elementcard-imagen">
                                        <img className="elementcard-imagen-imagen-front" src={proyecto.imagen} alt={proyecto.titulo} />
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
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    } if (categoria == "BACK END") {
        return (
            <>
                <div className="contentsection-contenedor">
                    <div className="backBG contentsection-titulo">{categoria}</div>
                    <div className="contentsection-contenido">
                        <div className="slider">
                        {proyectos.Backend.map(proyecto => (
                                <div className="elementcard-contenedor-front" key={proyecto.id}>
                                    <div className="elementcard-imagen">
                                        <img className="elementcard-imagen-imagen-front" src={proyecto.imagen} alt={proyecto.titulo} />
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
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    } if (categoria == "INOVACIÓN Y GESTIÓN") {
        return (
            <>
                <div className="contentsection-contenedor">
                    <div className="inovBG contentsection-titulo">{categoria}</div>
                    <div className="contentsection-contenido">
                        <div className="slider">
                        {proyectos.Gestión.map(proyecto => (
                                <div className="elementcard-contenedor-front" key={proyecto.id}>
                                    <div className="elementcard-imagen">
                                        <img className="elementcard-imagen-imagen-front" src={proyecto.imagen} alt={proyecto.titulo} />
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
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }



}

export default ContentSection