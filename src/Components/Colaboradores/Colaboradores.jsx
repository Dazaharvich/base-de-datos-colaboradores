import { BaseColaboradores } from '../../BaseColaboradores'
import React, { useState } from 'react'

const Colaboradores = ({busqueda}) => {
    /* ------se declaran los useState---- */
    const [nombreColaborador, setNombreColaborador] = useState("");
    const [correoColaborador, setCorreoColaborador] = useState("");
    const [idKey, setIdKey] = useState(4); /* estado como contador para generar nuevos id */
    const [colaboradores, setColaboradores] = useState(BaseColaboradores);


    // ----Función al enviar el formulario-----
    const addColaborador = (e) => {
    e.preventDefault();
    if(!nombreColaborador || !correoColaborador){
        alert("Ingresar Nombre y Correo");
    }else{
        setColaboradores([...colaboradores, { id: idKey, nombre: nombreColaborador, correo: correoColaborador }]);
        setIdKey(idKey+1);
        setNombreColaborador("");
        setCorreoColaborador("");
    }};
    
  return (
    <>
        <div className='container'>
            <form onSubmit={addColaborador}>
                <input
                className='form-control'
                placeholder='Nombre Colaborador'
                type='text'
                onChange={(e) => setNombreColaborador(e.target.value)}
                />
                <input
                className='form-control mt-3'
                placeholder='Correo Colaborador'
                type='text'
                onChange={(e) => setCorreoColaborador(e.target.value)}
                />
                <input
                type='submit'
                className='btn btn-primary mt-3'
                value='Agregar Colaborador'

                />
            </form>

            <div className='mt-5 d-flex flex-column align-items-center'>
                <h1>Listado de Colaboradores</h1>
                {/* ---------filtrado de busqueda de colaboradores--------- */}
                {colaboradores.filter((ele) => {
                    if(busqueda === ""){
                        return ele;
                    } else if(ele.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()) 
                    /* || ele.correo.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())--en caso de querer filtrar por correo también */
                    ){
                        return ele;
                    }
                }).map((ele) =>(
                    /* ----------mapeo y renderizado de colaboradores-------- */
                    <div className='container-table' key={ele.id}> 
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>{ele.nombre}</td>
                                <td>{ele.correo}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                ))
                }
            </div>
        </div>
    </>

  )
}

export default Colaboradores