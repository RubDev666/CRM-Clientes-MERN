import React from 'react';

import useClientes from '@/hooks/useClientes';

const Formulario = ({ cliente }) => {
    const {registrarCliente, editarCliente} = useClientes();

    return (
        <form
            onSubmit={(e) => {
                if(!cliente){
                    registrarCliente(e);
                } else {
                    editarCliente(e, cliente._id);
                }
            }}
            name='formulario'
        >
            <div className="mb-4">
                <label
                    className="text-gray-800 font-bold"
                    htmlFor="nombre"
                >Nombre:</label>
                <input
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                    defaultValue={cliente?.nombre}
                    required
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800 font-bold"
                    htmlFor="email"
                >E-mail:</label>
                <input
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email del Cliente"
                    name="email"
                    defaultValue={cliente?.email}
                    required
                    autoComplete='auto'
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800 font-bold"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input
                    id="telefono"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono del Cliente"
                    name="telefono"
                    defaultValue={cliente?.telefono}
                    required
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800 font-bold"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Notas del Cliente"
                    name="notas"
                    defaultValue={cliente?.notas}
                    required
                />
            </div>

            <button
                type="submit"
                className='mt-5 w-full bg-blue-800 p-3 font-bold text-white text-lg rounded-lg hover:bg-blue-600'
            >
                {cliente ? 'Editar Cliente' : 'Registrar Cliente'}
            </button>
        </form>
    )
}

export default Formulario