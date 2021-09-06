import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'


export default function CrearMaquina(props) {
    const [fecha,setFecha]=useState('')
    const [maquina,setMaquina]=useState('')
    const [nombre,setNombre]=useState('')
    const [ciudad,setCiudad]=useState('')
    const [parte1,setParte1]=useState('')
    const [parte2,setParte2]=useState('')
    const [parte3,setParte3]=useState('')
    const [parte4,setParte4]=useState('')
    const [parte5,setParte5]=useState('')
    const [parte6,setParte6]=useState('')
    const [parte7,setParte7]=useState('')
    const [parte8,setParte8]=useState('')
    const [parte9,setParte9]=useState('')
    const [parte10,setParte10]=useState('')
    const [cantidad1,setCantidad1]=useState('')
    const [cantidad2,setCantidad2]=useState('')
    const [cantidad3,setCantidad3]=useState('')
    const [cantidad4,setCantidad4]=useState('')
    const [cantidad5,setCantidad5]=useState('')
    const [cantidad6,setCantidad6]=useState('')
    const [cantidad7,setCantidad7]=useState('')
    const [cantidad8,setCantidad8]=useState('')
    const [cantidad9,setCantidad9]=useState('')
    const [cantidad10,setCantidad10]=useState('')
    const [editar,setEditar]=useState(false)

    useEffect(()=>{
        if(props.match.params.id){
            setEditar(true)
            const id=props.match.params.id
            consultarmaquinaUnico(id)
        }
    },[props.match.params.id])
    
    const consultarmaquinaUnico=async(id)=>{
        const respuesta=await Axios.get('http://localhost:4000/maquina/obtener/'+id)
        setFecha(respuesta.data.fecha)
        setMaquina(respuesta.data.maquina)
        setNombre(respuesta.data.nombre)
        setCiudad(respuesta.data.ciudad)
        setParte1(respuesta.data.parte1)
        setParte2(respuesta.data.parte2)
        setParte3(respuesta.data.parte3)
        setParte4(respuesta.data.parte4)
        setParte5(respuesta.data.parte5)
        setParte6(respuesta.data.parte6)
        setParte7(respuesta.data.parte7)
        setParte8(respuesta.data.parte8)
        setParte9(respuesta.data.parte9)
        setParte10(respuesta.data.parte10)
        setCantidad1(respuesta.data.cantidad1)
        setCantidad2(respuesta.data.cantidad2)
        setCantidad3(respuesta.data.cantidad3)
        setCantidad4(respuesta.data.cantidad4)
        setCantidad5(respuesta.data.cantidad5)
        setCantidad6(respuesta.data.cantidad6)
        setCantidad7(respuesta.data.cantidad7)
        setCantidad8(respuesta.data.cantidad8)
        setCantidad9(respuesta.data.cantidad9)
        setCantidad10(respuesta.data.cantidad10)
    }

    const guardarMaquina=async()=>{
        
        const MaquinaNueva={
            fecha,
            maquina,
            nombre,
            ciudad,
            parte1,
            parte2,
            parte3,
            parte4,
            parte5,
            parte6,
            parte7,
            parte8,
            parte9,
            parte10,
            cantidad1,
            cantidad2,
            cantidad3,
            cantidad4,
            cantidad5,
            cantidad6,
            cantidad7,
            cantidad8,
            cantidad9,
            cantidad10
        
        }
        const respuesta=await Axios.post('http://localhost:4000/maquina/crear',MaquinaNueva)
        const mensaje= respuesta.data.mensaje
        Swal.fire({
            
            icon: 'success',
            title: 'solicitud Enviada Exitosamente :-)',
            showConfirmButton: false,
            
          })
          setTimeout(()=>{
            window.location.href='/'
          },1300)
        
        }

         const actualizarMaquina=async()=>{
            
            const id=props.match.params.id
            const Maquina={
            fecha,
            maquina,
            nombre,
            ciudad,
            parte1,
            parte2,
            parte3,
            parte4,
            parte5,
            parte6,
            parte7,
            parte8,
            parte9,
            parte10,
            cantidad1,
            cantidad2,
            cantidad3,
            cantidad4,
            cantidad5,
            cantidad6,
            cantidad7,
            cantidad8,
            cantidad9,
            cantidad10
            }
            const respuesta=await Axios.put('http://localhost:4000/maquina/actualizar/'+id,Maquina)
            const mensaje= respuesta.data.mensaje
            Swal.fire({
                
                icon: 'success',
                title: 'Solicitud Actualizada Exitosamente',
                showConfirmButton: false,
                
              })
              setTimeout(()=>{
                window.location.href='/'
              },1300)
            
            }
         
         const accion=async(e)=>{
            e.preventDefault()
            if(editar){
                actualizarMaquina()
                
            }else{
                guardarMaquina()
            }
         }

        
    return (
        <div className="container text-center bg-dark">
                <div className="col-md-8.pt-4 mx-auto ">
                    <div className="card card-body ">
                        <h3>Ingrese</h3>

                        
                        
                    
                    <form onSubmit={accion}>
                        <div className="form-group mb-5">
                            <input type="date" className="form-control"
                                value={fecha} onChange={e => setFecha(e.target.value)}
                                placeholder="Ingrese activo maquina " required />
                        </div>
                        <div className="form-group mb-5">
                            <input type="texto" className="form-control"
                                value={maquina} onChange={e => setMaquina(e.target.value)}
                                placeholder="Ingrese activo maquina " required />
                        </div>

                        <div className="form-group mt-5">
                            <input type="text" className="form-control"
                                value={nombre} onChange={e => setNombre(e.target.value)}
                                placeholder="Ingrese Nombre y Apellido " required />
                        </div>

                        <div className="form-group mt-5">
                            <input type="text" className="form-control"
                                value={ciudad} onChange={e => setCiudad(e.target.value)}
                                placeholder="Ciudad " required />
                        </div>


                        <div className="row align-items-start mt-5">
                            <div className="col">

                                <ul className="list-group">
                                    <li className="list-group-item ">
                                        <div className="row align-items-start  ">
                                            <div className="col-6 ">
                                                <input type="text" className="form-control"
                                                    value={parte1} onChange={e => setParte1(e.target.value)}
                                                    placeholder="Ingrese parte  " />
                                            </div>
                                            <div className="col-6 ">
                                                <input type="number" className="form-control"
                                                    value={cantidad1} onChange={e => setCantidad1(e.target.value)}
                                                    placeholder="cantidad " />
                                            </div>
                                        </div>


                                    </li>
                                    <li className="list-group-item">
                                        <div className="row align-items-start">
                                            <div className="col-6">
                                                <input type="text" className="form-control"
                                                    value={parte2} onChange={e => setParte2(e.target.value)}
                                                    placeholder="Ingrese parte  " />
                                            </div>
                                            <div className="col-6 ">
                                                <input type="number" className="form-control"
                                                    value={cantidad2} onChange={e => setCantidad2(e.target.value)}
                                                    placeholder="cantidad " />
                                            </div>
                                        </div>

                                    </li>
                                    <li className="list-group-item">
                                        <div className="row align-items-start">
                                            <div className="col-6">
                                                <input type="text" className="form-control"
                                                    value={parte3} onChange={e => setParte3(e.target.value)}
                                                    placeholder="Ingrese parte  " />
                                            </div>
                                            <div className="col-6 ">
                                                <input type="number" className="form-control"
                                                    value={cantidad3} onChange={e => setCantidad3(e.target.value)}
                                                    placeholder="cantidad " />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row align-items-start">
                                            <div className="col-6">
                                                <input type="text" className="form-control"
                                                    value={parte4} onChange={e => setParte4(e.target.value)}
                                                    placeholder="Ingrese parte  " />
                                            </div>
                                            <div className="col-6 ">
                                                <input type="number" className="form-control"
                                                    value={cantidad4} onChange={e => setCantidad4(e.target.value)}
                                                    placeholder="cantidad " />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row align-items-start">
                                            <div className="col-6">
                                                <input type="text" className="form-control"
                                                    value={parte5} onChange={e => setParte5(e.target.value)}
                                                    placeholder="Ingrese parte  " />
                                            </div>
                                            <div className="col-6 ">
                                                <input type="number" className="form-control"
                                                    value={cantidad5} onChange={e => setCantidad5(e.target.value)}
                                                    placeholder="cantidad " />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="col">
                                <div className="card" >

                                    <div className="card-body bg-danger">
                                        <h5 className="card-title">Maquina</h5>
                                        <p className="card-text"> foto para la maquinaLorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Praesentium hic minima deserunt natus provident ea soluta quibusdam adipisci quisquam labore
                                            consequuntur voluptas vero commodi, magni repellat repudiandae rem necessitatibus voluptatem!</p>

                                    </div>
                                </div>

                            </div>

                            <div className="col">

                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <div className="row align-items-start">
                                            <div className="col-6">
                                                <input type="text" className="form-control"
                                                    value={parte6} onChange={e => setParte6(e.target.value)}
                                                    placeholder="Ingrese parte  " />
                                            </div>
                                            <div className="col-6 ">
                                                <input type="number" className="form-control"
                                                    value={cantidad6} onChange={e => setCantidad6(e.target.value)}
                                                    placeholder="cantidad " />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row align-items-start">
                                            <div className="col-6">
                                                <input type="text" className="form-control"
                                                    value={parte7} onChange={e => setParte7(e.target.value)}
                                                    placeholder="Ingrese parte  " />
                                            </div>
                                            <div className="col-6 ">
                                                <input type="number" className="form-control"
                                                    value={cantidad7} onChange={e => setCantidad7(e.target.value)}
                                                    placeholder="cantidad " />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row align-items-start">
                                            <div className="col-6">
                                                <input type="text" className="form-control"
                                                    value={parte8} onChange={e => setParte8(e.target.value)}
                                                    placeholder="Ingrese parte  " />
                                            </div>
                                            <div className="col-6 ">
                                                <input type="number" className="form-control"
                                                    value={cantidad8} onChange={e => setCantidad8(e.target.value)}
                                                    placeholder="cantidad " />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row align-items-start">
                                            <div className="col-6">
                                                <input type="text" className="form-control"
                                                    value={parte9} onChange={e => setParte9(e.target.value)}
                                                    placeholder="Ingrese parte  " />
                                            </div>
                                            <div className="col-6 ">
                                                <input type="number" className="form-control"
                                                    value={cantidad9} onChange={e => setCantidad9(e.target.value)}
                                                    placeholder="cantidad " />
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row align-items-start">
                                            <div className="col-6">
                                                <input type="text" className="form-control"
                                                    value={parte10} onChange={e => setParte10(e.target.value)}
                                                    placeholder="Ingrese parte  " />
                                            </div>
                                            <div className="col-6 ">
                                                <input type="number" className="form-control"
                                                    value={cantidad10} onChange={e => setCantidad10(e.target.value)}
                                                    placeholder="cantidad " />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>


                        {
                            //operador ternario---------------------------------------------------------------------
                            //si la opcion es actualizar mostrar botton modificar , sino mostrar boton guardar
                            editar ? <button type="submit" className="btn btn-warning mt-5 ">
                                Modificar
                            </button> :


                                <button type="submit" className="btn btn-primary mt-5 mr-1 ">
                                    Enviar
                                </button>

                        }

                    </form>
                </div>
                </div>
            </div>
    )
}
