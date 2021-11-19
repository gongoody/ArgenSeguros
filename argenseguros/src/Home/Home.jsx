import React from "react";
import Argenseguros from "../ArgenLogo/Argenseguros";
import NavBar from "../NavBar/NavBar"
import Glpa from "../GLPA/GLPA";
import NuestrosSeguros from "../NuestrosSeguros/NuestrosSeguros";
import Tipos from "../TipoDeSeguros/Tipos";
import SobreNosotros from "../Nosotros/Nosotros";
import Marcas from "../Marcas/Marcas";
import Footer from "../Footer/Footer";

export default function Home(){
    return(
        <div>
            <NavBar/>
            <Argenseguros/>
            <Glpa/>
            <NuestrosSeguros/>
            <Tipos/>
            <SobreNosotros/>
            <Marcas/>
            <Footer/>
        </div>
    )
}