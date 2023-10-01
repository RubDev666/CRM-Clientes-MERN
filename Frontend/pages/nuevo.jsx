import React from 'react';
import Head from "next/head";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useClientes from '@/hooks/useClientes';

import Layout from "@/components/Layout";
import Formulario from '@/components/Formulario';

const Nuevo = () => {
    const { cerrarModal, setFiltroActivado } = useClientes();

    const router = useRouter();

    //cierra el modal al cambiar de sitio, ya que si regresamos al inicio el modal seguira abierto y no es una buena experiencia de usuario
    useEffect(() => {
        cerrarModal();

        setFiltroActivado(false);
    })

    return (
        <>
            <Head>
                <title>CRM Clientes | Registrar cliente</title>
                <meta name="description" content="Pagina para agregar nuevos clientes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <h1 className="text-center font-black text-3xl xl:text-4xl text-blue-900">Nuevo Cliente</h1>
                <p className="mt-3 text-center font-bold xl:text-xl">Llena todos los campos para registrar un nuevo cliente</p>

                <div className="flex justify-center mt-5">
                    <button
                        className="bg-blue-800 hover:bg-blue-600 text-white px-4 py-2 font-bold"
                        onClick={() => router.push('/')}
                    >
                        Ver todos los clientes
                    </button>
                </div>

                <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-7'>
                    <Formulario />
                </div>
            </Layout>
        </>
    )
}

export default Nuevo;