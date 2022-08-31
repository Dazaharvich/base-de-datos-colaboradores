import React from 'react';

const Header = ({setBusqueda}) => {
  return (
    <>
        <nav className='navbar navbar-expand-lg mb-5 p-4'>
            <div className='container'>
                <h3 className='label'>Buscador de Colaboradores</h3>
                <form className='d-flex'>
                    <input
                        className='form-control me-2'
                        type='text'
                        placeholder='Buscar Colaborador'
                        onChange={(e) => {setBusqueda(e.target.value)}} /* almacenando valor del input de busqueda en el evento onChange */
                    />
                </form>
            </div>
        </nav>
    </>
  )
}

export default Header