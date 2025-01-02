import Logo from "../images/LogoMain.png";

function Nav() {

    return (
        <>
            <nav>
                <div className="nav-logo">
                    <img src={Logo} alt="AluraFlix" />
                </div>
                <div className="nav-botones">
                    <div className="nav-botones-home">
                        HOME
                    </div>
                    <div className="nav-botones-nuevo">
                        NUEVO VIDEO
                    </div>
                </div>
            </nav>
        </>
    )

}

export default Nav