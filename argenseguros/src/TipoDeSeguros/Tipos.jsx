import auto2 from "../assets/img/auto2.jpg"
import ART from "../assets/img/ART.jpg"
import autoGLPA from "../assets/img/autoGLPA.jpg"
import flota from "../assets/img/flota.jpg"
import hogar from "../assets/img/hogar.jpg"
import integralComercio from "../assets/img/integralComercio.jpg"
import retiro from "../assets/img/retiro.jpg"
import vida from "../assets/img/vida.jpg"

export default function Tipos(){
    return(
        <div>
            <div>
                <label>Seguros</label>
            </div>
            <div>
                <div>
                    <img src={auto2} alt="img not found"></img>
                    <label>Auto</label>
                </div>
                <div>
                    <img src={autoGLPA} alt="img not found"></img>
                    <label>Auto + GLPA</label>
                </div>
                <div>
                    <img src={flota} alt="img not found"></img>
                    <label>Flota</label>
                </div>
                <div>
                    <img src={ART} alt="img not found"></img>
                    <label>ART</label>
                </div>
                <div>
                    <img src={integralComercio} alt="img not found"></img>
                    <label>Integral de comercio</label>
                </div>
                <div>
                    <img src={hogar} alt="img not found"></img>
                    <label>Hogar</label>
                </div>
                <div>
                    <img src={vida} alt="img not found"></img>
                    <label>Vida</label>
                </div>
                <div>
                    <img src={retiro} alt="img not found"></img>
                    <label>Retiro</label>
                </div>
            </div>
            <div>
                <button>Obtener tu cotización</button>
            </div>
        </div>
    )
}