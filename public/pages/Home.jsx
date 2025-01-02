import TitleCard from "../components/TitleCard";
import ContentSection from "../components/ContentSection";

function Home() {

    return (
        <>
            <div className="main-contenedor">
                <TitleCard />
                <ContentSection categoria="FRONT END" />
                <ContentSection categoria="BACK END" />
                <ContentSection categoria="INOVACIÓN Y GESTIÓN" />
            </div>
        </>
    )

}

export default Home