function NewVideo() {

    return (
        <>
            <div className="nuevo-contenedor">
                <div className="nuevo-titulo">
                    <div className="nuevo-titulo-texto">NUEVO VIDEO</div>
                    <div className="nuevo titulo-instrucciones">COMPLETE EL FOMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</div>
                </div>
                <div className="nuevo-formulario">
                    <div className="nuevo-formulario-titulo">Crear Tarjeta</div>
                    <div className="nuevo-formulario-campos">
                        <div className="nuevo-formulario-campos-seccion">
                            <div className="nuevo-formulario-campos-seccion-input">
                                <label for="titulo">Título</label>
                                <input type="text" id="titulo" name="titulo" placeholder="Ingrese el Título"></input>
                            </div>
                            <div className="nuevo-formulario-campos-seccion-input">
                                <label for="categoria">Categoría</label>
                                <select id="categoria" name="categoria">
                                    <option disabled selected value="">Selecciona una Categoría</option>
                                    <option value="frontend">Front End</option>
                                    <option value="backend">Back End</option>
                                    <option value="inovacion">Inovación y Gestión</option>
                                </select>
                            </div>
                        </div>
                        <div className="nuevo-formulario-campos-seccion">
                            <div className="nuevo-formulario-campos-seccion-input">
                                <label for="imagen">Imágen</label>
                                <input type="text" id="imagen" name="imagen" placeholder="Ingrese el URL de la imágen"></input>
                            </div>
                            <div className="nuevo-formulario-campos-seccion-input">
                                <label for="video">Video</label>
                                <input type="text" id="video" name="video" placeholder="Ingrese el URL del video"></input>
                            </div>
                        </div>
                        <div className="nuevo-formulario-campos-seccion">
                            <div className="nuevo-formulario-campos-seccion-input">
                                <label for="descripcion">Descripción</label>
                                <textarea rows="5" id="descripcion" name="descripcion" placeholder="Ingrese la descripción del video"></textarea>
                            </div>
                        </div>
                        <div className="nuevo-formulario-campos-botones">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default NewVideo