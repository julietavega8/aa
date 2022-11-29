import Button from "../../components/index";
import background from "../../assets/background.webp"
import background2 from "../../assets/background2.jpeg"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home(){

    const navigate = useNavigate();

    const onClickButton=(url) => {
        navigate(url);
    }

    const [changeBackground, setChangebackground] = useState(background)

    return(
        <section className="hero is-medium is-fullheight" style={{backgroundImage:`url(${changeBackground})`, backgroundSize:"cover"}} >;
            <div className="hero-body">
                <div className="container has-text-centered">
                    <Button onClick={()=>onClickButton("/game")} text="haz click para iniciar el juego"/>
                    <br/>
                    <Button onClick={()=>setChangebackground(background2)} text="cambia de fondo"/>
                </div>
                
            </div>
            
        </section>
    

    )

}

export default Home;