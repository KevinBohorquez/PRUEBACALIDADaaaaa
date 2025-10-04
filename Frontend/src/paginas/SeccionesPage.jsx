import { useState } from "react";
import "../styles/SeccionesPage.css"
import SeccionCard from "../componentes/SeccionCard";
import { useAuth } from "../context/AuthContext"; //mochar

function SeccionesPage(){
    const { user } = useAuth(); // mochar
    const [secciones, setSecciones] = useState([
        { id: 1, nombre: "CALIDAD DE SOFTWARE - G1" },
    ]);
    
    const handleAgregarSeccion = () => {
        console.log(user);
        const nombre = prompt("Ingrese el nombre de la nueva sección:");
        if (nombre && nombre.trim() !== "") {
        const nuevaSeccion = {
            id: Date.now(), 
            nombre: nombre
        };
        setSecciones([...secciones, nuevaSeccion]);
        }
    };

    return(
        <div className="seccionesPage-body">
            <div className="main-seccionesPage-container row">
                <div className="perfil-container col">
                    <h2>SALUDOS, LUIS</h2>
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="secciones-crud-container col">
                    <div className="secciones-header-container row">
                        <select>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                        </select>
                        <button className="button-seccionesPage" onClick={handleAgregarSeccion}>Agregar nueva seccion</button>
                    </div>
                    <div className="secciones-container row">
                        {secciones.map((sec) => (
                        <SeccionCard key={sec.id} nombre={sec.nombre} />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default SeccionesPage;