import Caruso from "../assets/img/Caruso.jpg"
import sura from "../assets/img/sura.jpg"
import experta from "../assets/img/experta.jpg"
import SanCristobal from "../assets/img/SanCristobal.png"
import triunfo from "../assets/img/triunfo.jpg"
import origenes from "../assets/img/origenes.jpg"
import profseguros from "../assets/img/profseguros.png"

export default function Marcas(){
    return(
        <div>
            <div>
                <span>¿Con quién trabajamos?</span>
            </div>
            <div>
                <img src={Caruso} alt="img not found"/>
                <img src={sura} alt="img not found"/>
                <img src={experta} alt="img not found"/>
                <img src={SanCristobal} alt="img not found"/>
                <img src={triunfo} alt="img not found"/>
                <img src={origenes} alt="img not found"/>
                <img src={profseguros} alt="img not found"/>
            </div>            
        </div>
    )
}