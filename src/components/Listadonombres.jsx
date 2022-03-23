import React, {useState} from 'react'

const Listadonombres = () => {
  return (
    <div>
        <h2>Aplicacion crud basica</h2>
          <div className="row">
              <div className="col">
                <h2>Listado de nombres</h2>
              </div>
              <div className="col">
                <h2>Formulario para añdir nombres</h2>
					<form className='form-group'>
						<input className='form-control mb-3' type="text" placeholder='Introduce el nombre' />
						<input className='btn btn-info btn-block' type="submit" value='Registrar nombre' />
					</form>
              </div>
          </div>
    </div>
  )
}

export default Listadonombres