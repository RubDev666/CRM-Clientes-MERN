import React from 'react';
import { useRouter } from 'next/navigation';

import useClientes from '@/hooks/useClientes';

const Cliente = ({ cliente }) => {
    const { informacionCliente, eliminarCliente } = useClientes();

    const { nombre, email, telefono, _id, notas } = cliente;

    const router = useRouter();

    return (
        <tr className="border-b">
            <td className='p-6 space-y-2'>
                <p className="text-base font-bold lg:text-2xl text-gray-800">{nombre}</p>
            </td>

            <td className="p-6 hidden xl:table-cell">
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Email: </span>{email} </p>
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono} </p>
            </td>

            <td className='hidden sm:table-cell w-1/3'>
                {notas}
            </td>

            <td className="py-6 px-4 flex items-center justify-center xl:table-cell">
                <button
                    type="button"
                    className="bg-blue-700 p-2 text-white hover:bg-blue-500 font-bold text-xs flex  xl:hidden rounded-lg"
                    onClick={() => informacionCliente(_id)}
                >
                    Ver informacion completa
                </button>

                <button
                    type="button"
                    className="bg-blue-700 hover:bg-blue-500 font-bold text-xs hidden xl:block py-2 rounded-lg text-white w-full mb-3"
                    onClick={() => router.push(`editar/${cliente._id}`)}
                >
                    Editar
                </button>

                <button
                    type="submit"
                    className="bg-red-700 text-white hover:bg-red-500 font-bold text-xs p-2 rounded-lg w-full hidden xl:block"
                    onClick={() => eliminarCliente(_id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Cliente