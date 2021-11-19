import padrehijo from "../assets/img/padrehijo.jpg"
import './Argenseguros.modules.css'

export default function Argenseguros(){
    return(
        <div className='argenseguros-container'>
            <div className='argenseguros-text'>
                <label>
                    <h1>Argenseguros</h1>
                    <h3>Productor Asesor de Seguros</h3>
                    <h6>Tu seguro simple y facil, siempre</h6>
                </label>
            </div>
            <div className='argenseguros-img'>
                <img src={padrehijo} alt="img not found"></img>
            </div>
        </div>
    )
}