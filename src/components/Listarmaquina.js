import Axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

export default function ListarMaquina() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    obtenerMaquina();
  }, []);
  const obtenerMaquina = async () => {
    const respuesta = await Axios.get("http://localhost:4000/maquina/obtener");

    setDatos(respuesta.data);
  };

  const eliminar=async(id)=>{
    const respuesta=await Axios.delete('http://localhost:4000/maquina/eliminar/'+id)
    Swal.fire({
                
      icon: 'success',
      title: 'Solicitud Eliminada',
      showConfirmButton: false,
      
    })
    setTimeout(()=>{
      window.location.href='/'
    },1300)
    
  }

  return (
    <div className="container mt-4">
      <div className="card bg-info ">
        <div className="card-header text-center">
          <h4>Solicitudes</h4>
        </div>
        {datos.map((maquina) => (
          <ul key={maquina._id} className="text">
            <div className="card">
              <ul class="list-group list-group-flush">
                <li className="list-group-item"><label className="fw-bold">Fecha : </label>{maquina.fecha}</li>
                <li className="list-group-item"><label className="fw-bold">Maquina :</label>{maquina.maquina}</li>
                <li className="list-group-item"><label className="fw-bold">Nombre :</label>{maquina.nombre}</li>
                <li className="list-group-item"><label className="fw-bold">Ciudad :</label>{maquina.ciudad}</li>
                <li className="list-group-item"><label className="fw-bold">Parte 1 :</label>{maquina.parte1}</li>
                <li className="list-group-item"><label className="fw-bold">Cantidad 1 :</label>{maquina.cantidad1}</li>
                <li className="list-group-item"><label className="fw-bold">Parte 2 :</label>{maquina.parte2}</li>
                <li className="list-group-item"><label className="fw-bold">Cantidad 2 :</label>{maquina.cantidad2}</li>
                <li className="list-group-item"><label className="fw-bold">Parte 3 :</label>{maquina.parte3}</li>
                <li className="list-group-item"><label className="fw-bold">Cantidad 3 :</label>{maquina.cantidad3}</li>
                <li className="list-group-item"><label className="fw-bold">Parte 4 :</label>{maquina.parte4}</li>
                <li className="list-group-item"><label className="fw-bold">Cantidad 4 :</label>{maquina.cantidad4}</li>
                <li className="list-group-item"><label className="fw-bold">Parte 5 :</label>{maquina.parte5}</li>
                <li className="list-group-item"><label className="fw-bold">Cantidad 5 :</label>{maquina.cantidad5}</li>
                <li className="list-group-item"><label className="fw-bold">Parte 6 :</label>{maquina.parte6}</li>
                <li className="list-group-item"><label className="fw-bold">Cantidad 6 :</label>{maquina.cantidad6}</li>
                <li className="list-group-item"><label className="fw-bold">Parte 7 :</label>{maquina.parte7}</li>
                <li className="list-group-item"><label className="fw-bold">Cantidad 7 :</label>{maquina.cantidad7}</li>
                <li className="list-group-item"><label className="fw-bold">Parte 8 :</label>{maquina.parte8}</li>
                <li className="list-group-item"><label className="fw-bold">Cantidad 8 :</label>{maquina.cantidad8}</li>
                <li className="list-group-item"><label className="fw-bold">Parte 9 :</label>{maquina.parte9}</li>
                <li className="list-group-item"><label className="fw-bold">Cantidad 9 :</label>{maquina.cantidad9}</li>
                <li className="list-group-item"><label className="fw-bold">Parte 10 :</label>{maquina.parte10}</li>
                <li className="list-group-item"><label className="fw-bold">Cantidad 10 :</label>{maquina.cantidad10}</li>
              </ul>
            
                <td>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <Link className="btn btn-primary me-md-2" to={'/editar/'+maquina._id}>
                      Modificar
                    </Link>
                    <button className="btn btn-danger"onClick={()=>eliminar(maquina._id)}>
                      Eliminar
                      </button>
                  </div>
                </td>
                </div>
            </ul>
          ))}
        
      </div>
    </div>
  );
}
