import React, {useState} from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {

	const [nombre, setNombre] = useState('')
	const [listanombres, setListaNombres] = useState([])

	const addNombre = (e) => {
		e.preventDefault()
		const nuevoNombre = {
			id: uniqid(),
			tituloNombre: nombre
		}
		setListaNombres([...listanombres, nuevoNombre])
	}

	return (
		<div>
			<h2>Aplicacion crud basica</h2>
				<div className="row">
					<div className="col">
							<h2>Listado de nombres</h2>
					</div>
					<div className="col">
						<h2>Formulario para añdir nombres</h2>
							<form onSubmit={(e)=>addNombre(e)} className='form-group'>
								<input onChange={(e)=>{setNombre(e.target.value)}} className="form-control mb-3" type="text" placeholder='Introduce el nombre' />
								<input className="btn btn-info btn-block w-100" type="submit" value="Registrar nombre" />
							</form>
					</div>
				</div>
		</div>
	)
}

export default Listadonombres