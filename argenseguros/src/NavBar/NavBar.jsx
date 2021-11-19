import LOGO from "../assets/img/LOGO.png"
import tituloLema from "../assets/img/tituloLema.png"
import "./NavBar.modules.css"

export default function NavBar(){
    return(
        <div className='navbar-container'>
            <div>
                <img className='navbar-logo' src={LOGO} alt="img not found"></img>
            </div>
            <div className='navbar-lema-container'>
                <img className='navbar-lema' src={tituloLema} alt="img not found"></img>
            </div>
            <div>
                <div className='navbar-menu-container'>
                    <label className='navbar-menu-item'>Inicio</label>
                    <label className='navbar-menu-item'>Seguro GLPA</label>
                    <label className='navbar-menu-item'>Cotizar</label>
                    <label className='navbar-menu-item'>Nosotros</label>
                    <label className='navbar-menu-item'>FACEBOOK</label>
                    <div>
                        <label className='navbar-menu-chat'>Chatea con nosotros</label>
                    </div>
                </div>
            </div>
        </div>
    )
}